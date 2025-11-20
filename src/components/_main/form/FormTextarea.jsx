export default function FormTextarea({form ,setForm}) {
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
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
        name="comment"
        id="comment"
        cols="30"
        rows="7"
        value={form.comment}
        onChange={handleForm}
      ></textarea>
    </div>
  );
}
