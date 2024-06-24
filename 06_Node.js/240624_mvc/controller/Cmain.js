const { getDbComments } = require("../model/Comment");

// (임시) DB에서 가지고온 데이터
const comments = [
    {
      id: 1,
      userid: 'helloworld',
      date: '2022-10-31',
      comment: '안녕하세요^~^',
    },
    {
      id: 2,
      userid: 'happy',
      date: '2022-11-01',
      comment: '반가워유',
    },
    {
      id: 3,
      userid: 'lucky',
      date: '2022-11-02',
      comment: '오 신기하군',
    },
    {
      id: 4,
      userid: 'bestpart',
      date: '2022-11-02',
      comment: '첫 댓글입니당ㅎㅎ',
    },
];

exports.getMain = (req, res) => {
    res.render('index');
}

exports.getComments = (req, res) => {
    res.render('comments', { comments }); // { comments: comments }
}

exports.getComment = (req, res) => {
    console.log(req.params); // { id: '1' } 
    console.log(req.params.id) // '1' 

    // 댓글 id: 요청 주소로 들어온 매개변수 (:id)
    const commentId = req.params.id; 
    const dbComments = getDbComments();
    console.log(dbComments[commentId - 1]);

    console.log(comments[commentId - 1]) 

    // 존재하지 않는 id에 대해서 요청할 때, 404 처리
    if (!dbComments[commentId - 1]) { // !undefined => true
        return res.render('404');
    }

    res.render('comment', 
        { comment: dbComments[commentId - 1] });
}