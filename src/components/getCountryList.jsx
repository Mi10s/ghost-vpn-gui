import { useState, useEffect } from 'react';
import util from 'util';
import { exec } from 'child_process';

const pExec = util.promisify(exec);

const getCountryList = () => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    (async () => {
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

      setCountryList(countries);
    })();
  }, []);

  return countryList;
};

export default getCountryList;
