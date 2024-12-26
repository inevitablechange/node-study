// 라우터 관련 메인 코드
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  // 'app.js'에서 html(여기서는 ejs파일)을 'views' 폴더를 바라보게 설정했기 때문에 "index" 만 적어준다.
  res.render("index");
  //   // query를 받는 방법은 아래와 같다.
  //   let query = req.query;
  //   console.log(query);

  //   //특정 query(예. page)만 가져오고 싶을 때
  //   let page = req.query.page;
  //   console.log(page);

  //   res.send({
  //     key: "value",
  //   });
});

router.get("/about", function (req, res) {
  res.send("About");
});

// POST는 코드단에서만 사용할 수 있다. 민감한 정보를 주고 받을 떄 사용한다.
// 이때 테스트를 위해 postman을 사용한다.
router.post("/postapi", function (req, res) {
  // req를 요청한 사용자가 보낸 데이터를 확인할 수 있다.
  let body = req.body;
  console.log(body);

  res.send("POST API");
});

// 위에서 router 변수를 설정했고, 이를 export하여 app.js에서 사용한다.
module.exports = router;
