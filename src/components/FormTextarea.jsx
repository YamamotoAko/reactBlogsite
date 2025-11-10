import { useState } from 'react';

export default function FormTextarea() {
  const [form, setForm] = useState({
    comment: `ここに記入してください`,
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const show = () => {
    console.log(`コメント :${form.comment}`);
  };
  return (
    <div className="formwrap">
      <label
        htmlFor="comment"
        style={{
          fontSize: 15,
          fontWeight: 600,
        }}
      >
        What kind of special features or topics would you like to read on BAMOS
        DESIGN in the future?
      </label>
      <textarea
        name="comennt"
        id="comment"
        cols="30"
        rows="7"
        value={form.comment}
        onChange={handleForm}
      ></textarea>
    </div>
  );
}
