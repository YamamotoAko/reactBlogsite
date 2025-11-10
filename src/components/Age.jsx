import { useState } from 'react';

export default function Age() {
  const [form, setForm] = useState({
    age: '0-10',
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`age:${form.age}`);
  };

  return (
    <div className="formwrap">
      <h2
        style={{
          fontSize: 15,
          fontWeight: 600,
        }}
      >
        Age
      </h2>
      <div className="radiowrap">
        <span>
          <input
            id="0-10"
            name="age"
            type="radio"
            value="0-10"
            checked={form.age === '0-10'}
            onChange={handleForm}
          />
          <label htmlFor="0-10">0-10</label>
        </span>
        <span>
          <input
            id="10-20"
            name="age"
            type="radio"
            value="10-20"
            checked={form.age === '10-20'}
            onChange={handleForm}
          />
          <label htmlFor="10-20">10-20</label>
        </span>
        <span>
          <input
            id="20-30"
            name="age"
            type="radio"
            value="20-30"
            checked={form.age === '20-30'}
            onChange={handleForm}
          />
          <label htmlFor="20-30">20-30</label>
        </span>
        <span>
          <input
            id="30-40"
            name="age"
            type="radio"
            value="30-40"
            checked={form.age === '30-40'}
            onChange={handleForm}
          />
          <label htmlFor="30-40">30-40</label>
        </span>
        <span>
          <input
            id="40-50"
            name="age"
            type="radio"
            value="40-50"
            checked={form.age === '40-50'}
            onChange={handleForm}
          />
          <label htmlFor="40-50">40-50</label>
        </span>
        <span>
          <input
            id="50andAbove"
            name="age"
            type="radio"
            value="50andAbove"
            checked={form.age === '50andAbove'}
            onChange={handleForm}
          />
          <label htmlFor="50andAbove">50 and above</label>
        </span>
      </div>
    </div>
  );
}
