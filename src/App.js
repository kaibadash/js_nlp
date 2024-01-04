/** @format */

import "./App.css";
import React, { useState } from "react";
import { BarChart, Tooltip, Bar, XAxis, YAxis } from "recharts";

function App() {
  function segments(text) {
    const segmenter = new Intl.Segmenter("ja", { granularity: "word" });
    const segments = segmenter.segment(text);
    const arr = Array.from(segments)
      .filter((seg) => seg.isWordLike)
      .reduce((acc, obj) => {
        const key = obj.segment;
        if (!acc[key]) {
          acc[key] = { segment: key, value: 0 };
        }
        acc[key]["value"] += 1;
        return acc;
      }, {});
    return Object.values(arr)
      .sort((a, b) => {
        return a.value > b.value ? -1 : 1;
      })
      .slice(0, 30);
  }

  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
    setData(segments(event.target.value));
  };
  const setYoshinoya = (event) => {
    const s =
      "昨日、近所の吉野家行ったんです。吉野家。そしたらなんか人がめちゃくちゃいっぱいで座れないんです。で、よく見たらなんか垂れ幕下がってて、150円引き、とか書いてあるんです。もうね、アホかと。馬鹿かと。お前らな、150円引き如きで普段来てない吉野家に来てんじゃねーよ、ボケが。150円だよ、150円。なんか親子連れとかもいるし。一家4人で吉野家か。おめでてーな。よーしパパ特盛頼んじゃうぞー、とか言ってるの。もう見てらんない。お前らな、150円やるからその席空けろと。吉野家ってのはな、もっと殺伐としてるべきなんだよ。Uの字テーブルの向かいに座った奴といつ喧嘩が始まってもおかしくない、刺すか刺されるか、そんな雰囲気がいいんじゃねーか。女子供は、すっこんでろ。で、やっと座れたかと思ったら、隣の奴が、大盛つゆだくで、とか言ってるんです。そこでまたぶち切れですよ。あのな、つゆだくなんてきょうび流行んねーんだよ。ボケが。得意げな顔して何が、つゆだくで、だ。お前は本当につゆだくを食いたいのかと問いたい。問い詰めたい。小1時間問い詰めたい。お前、つゆだくって言いたいだけちゃうんかと。吉野家通の俺から言わせてもらえば今、吉野家通の間での最新流行はやっぱり、ねぎだく、これだね。大盛りねぎだくギョク。これが通の頼み方。ねぎだくってのはねぎが多めに入ってる。そん代わり肉が少なめ。これ。で、それに大盛りギョク(玉子)。これ最強。しかしこれを頼むと次から店員にマークされるという危険も伴う、諸刃の剣。素人にはお薦め出来ない。まあお前らド素人は、牛鮭定食でも食ってなさいってこった。";
    setText(s);
    setData(segments(s));
  };
  const setRuizu = (event) => {
    const s =
      "ルイズ！ルイズ！ルイズ！ルイズぅぅうううわぁああああああああああああああああああああああん！！！あぁああああ…ああ…あっあっー！あぁああああああ！！！ルイズルイズルイズぅううぁわぁああああ！！！あぁクンカクンカ！クンカクンカ！スーハースーハー！スーハースーハー！いい匂いだなぁ…くんくんんはぁっ！ルイズ・フランソワーズたんの桃色ブロンドの髪をクンカクンカしたいお！クンカクンカ！あぁあ！！間違えた！モフモフしたいお！モフモフ！モフモフ！髪髪モフモフ！カリカリモフモフ…きゅんきゅんきゅい！！小説12巻のルイズたんかわいかったよぅ！！あぁぁああ…あああ…あっあぁああああ！！ふぁぁあああんんっ！！アニメ2期放送されて良かったねルイズたん！あぁあああああ！かわいい！ルイズたん！かわいい！あっああぁああ！コミック2巻も発売されて嬉し…いやぁああああああ！！！にゃああああああああん！！ぎゃああああああああ！！ぐあああああああああああ！！！コミックなんて現実じゃない！！！！あ…小説もアニメもよく考えたら…ル イ ズ ち ゃ ん は 現実 じ ゃ な い?にゃあああああああああああああん！！うぁああああああああああ！！そんなぁああああああ！！いやぁぁぁあああああああああ！！はぁああああああん！！ハルケギニアぁああああ！！この！ちきしょー！やめてやる！！現実なんかやめ…て…え！?見…てる?表紙絵のルイズちゃんが僕を見てる?表紙絵のルイズちゃんが僕を見てるぞ！ルイズちゃんが僕を見てるぞ！挿絵のルイズちゃんが僕を見てるぞ！！アニメのルイズちゃんが僕に話しかけてるぞ！！！よかった…世の中まだまだ捨てたモンじゃないんだねっ！いやっほぉおおおおおおお！！！僕にはルイズちゃんがいる！！やったよケティ！！ひとりでできるもん！！！あ、コミックのルイズちゃああああああああああああああん！！いやぁあああああああああああああああ！！！！あっあんああっああんあアン様ぁあ！！シ、シエスター！！アンリエッタぁああああああ！！！タバサｧぁあああ！！ううっうぅうう！！俺の想いよルイズへ届け！！ハルゲニアのルイズへ届け！";
    setText(s);
    setData(segments(s));
  };

  return (
    <div className="App">
      <h1>Segmenter Test</h1>
      <p>使用頻度が高い上位30を表示する。</p>
      <button onClick={setYoshinoya}>吉野家コピペでテスト</button>
      <button onClick={setRuizu}>ルイズコピペでテスト</button>
      <textarea value={text} onChange={handleChange} />
      <BarChart width={800} height={400} data={data}>
        <Bar dataKey="value" fill="#8884d8" />
        <XAxis dataKey="segment" />
        <YAxis />
        <Tooltip />
      </BarChart>
      <p>
        <a href="https://github.com/kaibadash/js_nlp">GitHub</a>
      </p>
    </div>
  );
}

export default App;
