import { useState } from 'react';

export default function FormCheck() {
  const [form, setForm] = useState({
    category: ['music', 'art'],
  });

  const handleFormMulti = (e) => {
    const fa = form.category;
    if (e.target.checked) {
      fa.push(e.target.value);
    } else {
      fa.splice(fa.indexOf(e.target.value), 1);
    }
    setForm({
      ...form,
      [e.target.name]: fa,
    });
  };
  const show = () => {
    console.log(`category :${form.category}`);
  };

  return (
    <div className="formwrap">
      <h2
        style={{
          fontSize: 15,
          fontWeight: 600,
        }}
      >
        What is your favorite field or area of interest?
      </h2>
      <div className="category">
        <span>
          <input
            id="category_music"
            name="category"
            value="music"
            type="checkbox"
            checked={form.category.includes('music')}
            onChange={handleFormMulti}
          />
          <label htmlFor="category_music">音楽</label>
        </span>
        <span>
          <input
            id="category_art"
            name="category"
            value="art"
            type="checkbox"
            checked={form.category.includes('art')}
            onChange={handleFormMulti}
          />
          <label htmlFor="category_design">デザイン</label>
        </span>
        <span>
          <input
            id="category_design"
            name="category"
            value="design"
            type="checkbox"
            checked={form.category.includes('design')}
            onChange={handleFormMulti}
          />
          <label htmlFor="category_art">芸術</label>
        </span>
        <span>
          <input
            id="category_programming"
            name="category"
            value="programming"
            type="checkbox"
            checked={form.category.includes('programming')}
            onChange={handleFormMulti}
          />
          <label htmlFor="category_programming">プログラミング</label>
        </span>
      </div>
    </div>
  );
}
