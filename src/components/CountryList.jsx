/* eslint-disable react/jsx-indent */
import React from 'react';
import { connect } from 'react-redux';
import { selectCountry } from '../actions';
import util from 'util';
import { exec } from 'child_process';

const pExec = util.promisify(exec);

class CountryList extends React.Component {
  state = { countries: ''};

  renderCountryList(countries) {
    return countries
      .map((country) => <option value={country.code} key={country.name}>{country.name}</option>);
  }

  onSelectChange = (ev) => {
    this.props.selectCountry(ev.target.value);
  };

  async componentDidMount() {
    const { stdout, stderr } = await pExec("cyberghostvpn --country-code | sed 's/[|+-]/ /g' | grep -v Country | awk '{ printf $1=\"\"; print $0 }'");

      if (stderr) {
        console.error(`exec error: ${stderr}`);
        return;
      }

      const countries = stdout.split(/\n/)
        .filter((input) => input !== '')
        .map((value) => {
          const code = value.match(/[A-Z]{2}/g)[0];
          const name = value.replace(/[A-Z]{2}/g, '');

          return { name, code };
        });
    this.setState({countries});
  }

  render() {
    if (!this.state.countries) {
      return <div>Loading...</div>;
    }

    return (
    <div>
      <select className="ui fluid search dropdown" onChange={this.onSelectChange}>
        {this.renderCountryList(this.state.countries)}
      </select>
    </div>
    );
  }
};

export default connect(null, { selectCountry })(CountryList);
