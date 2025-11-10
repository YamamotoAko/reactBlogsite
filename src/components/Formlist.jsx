import { useState } from 'react';

export default function Formlist() {
  const [form, setForm] = useState({
    source: '1つ選択して下さい',
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`source_select:${form.source}`);
  };
  return (
    <div className="formwrap">
      <label
        htmlFor="source_select"
        style={{
          fontSize: 15,
          fontWeight: 600,
        }}
      >
        How did you hear about BAMOS DESIGN?
      </label>
      <select
        name="source"
        id="source"
        value={form.source}
        onChange={handleForm}
        style={{
          width: 173,
          height: 30,
          border: '1px solid #333',
          borderRadius: 2,
          fontSize: 13,
          textAlign: 'center',
        }}
      >
        <option value="none">--1つ選択して下さい--</option>
        <option value="z">z</option>
        <option value="friend intro">友人の紹介</option>
        <option value="sns">SNS</option>
        <option value="bunner">Webバナー</option>
        <option value="vod">動画配信サイト</option>
        <option value="ad">広告・ポスター</option>
        <option value="other">その他</option>
      </select>
    </div>
  );
}
