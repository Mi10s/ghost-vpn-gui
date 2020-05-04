import React from 'react';
import { connect } from 'react-redux';
import util from 'util';
import { exec } from 'child_process';
import { selectCountry, createCountryList } from '../actions';

const pExec = util.promisify(exec);

class CountryList extends React.Component {
  async componentDidMount() {
    const { stdout, stderr } = await pExec("cyberghostvpn --country-code | sed 's/[|+-]/ /g' | grep -v Country | awk '{ printf $1=\"\"; print $0 }'");

    if (stderr) {
      console.error(`exec error: ${stderr}`);
      return;
    }

    const countries = stdout.split(/\n/)
      .filter((input) => input !== '')
      .map((value) => {
        const code = value.match(/[A-Z]{2}/g)[0]; // TODO handle when value is null
        const name = value.replace(/[A-Z]{2}/g, '');

        return { name, code };
      });

    this.props.createCountryList(countries);
    this.props.selectCountry(countries[0].code);
  }

  onSelectChange = (ev) => {
    this.props.selectCountry(ev.target.value);
  };

  renderCountryList() {
    const { countryList } = this.props.country;

    return countryList
      .map((country) => <option value={country.code} key={country.name}>{country.name}</option>);
  }

  render() {
    if (this.props.country.countryList.length === 0) {
      return <div className="item">Loading...</div>;
    }

    return (
      <div className="item">
        <select className="ui fluid search dropdown" onChange={this.onSelectChange}>
          {this.renderCountryList()}
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ country: state.country });

export default connect(mapStateToProps, { selectCountry, createCountryList })(CountryList);
