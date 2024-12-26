// Nodejs 백엔드 프레임워크인 Express를 불러옴
// 이해할 필요는 없고 아래와 같이 사용하면 된다. app 안에 서버에 필요한 모든 도구가 들어있게 된다.
const express = require("express");
// 최소한의 보안을 위해 Helmet npm 을 사용한다. 구체적인 사용법과 내용은 npm 사이트에서 확인 필요
const helmet = require("helmet");
const app = express();
const ejs = require("ejs");

//html을 보여주기 위해 'view engine'을 세팅해주고, html의 파일 위치를 알려준다.
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/public", express.static(__dirname + "/public"));

app.use(helmet());
// 아래 'json'과 'urlencoded'를를 사용해야 post 방식에서 body 데이터를 확인할 수 있다.
app.use(express.json());
app.use(express.urlencoded());

//'mainRouter.js'의 router 변수를 가져온다.
const mainRouter = require("./router/mainRouter");
// middleware을 설정한다. 이때 use를 사용한다.
app.use("/", mainRouter);

// 서버를 키는 스위치 역할을 한다.
// 실행 방법 : 터미널에 'node app.js' 입력
// 'supervisor' library를 다운로드해서 'supervisor app.js'를 입력하면 코드를 저장하면 서버를 껐다 킬 필요없이 바로 적용된다.
app.listen(3000, function (req, res) {
  console.log("서버가 실행되고 있다!");
});
