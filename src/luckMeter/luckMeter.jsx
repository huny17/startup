import React from 'react';

export function luckMeter(){
  const [meter, setMeter] = React.useStat([]);

  React.useEffect(()=> {
    const meterText = localStorag.getItem('meter');
    if (meterText){
      setMeter(JSON.parse(meterText));
    }
  }, []);

  const meterLines = [];
  if (meter.length) {
    for (const [i, meter] of meter.entries()) {
      meterRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{meter.name.split('@')[0]}</td>
          <td>{meter.meter}</td>
          <td>{meter.date}</td>
        </tr>
      );
    }
  }
  else {
    meterLines.push(
      <tr key = '0'>
        <td colSpan = '4'>Record your Luck first</td>
      </tr>
    );
  }

  return (
    <main className='container-fluid bg-secondary text-center'>
      <table className='table table-warning table-striped-columns'>
        <thead className='table-dark'>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Luck Meter</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id='scores'>{scoreRows}</tbody>
      </table>
    </main>
  );

}

