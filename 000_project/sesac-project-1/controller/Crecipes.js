const RecipesModel = require("../models/Mrecipe");
const Recipe_Img_Model = require("../models/Mrecipe_img");
const express = require("express");

const { Recipes, Recipe_Img, Users } = require("../models/Mindex");

// get /recipe?recipe_num=1 레시피 상세보기 페이지 - 완
// select * from where rcp_id=?
exports.getRecipe = async (req, res) => {
  console.log("레시피 상세페이지 1 >> ", req.query);
  try {
    console.log("레시피 상세페이지 >> ", req.query);

    const { recipe_num } = req.query;
    const recipe = await Recipes.findOne({
      where: { recipe_num },
      include: [
        {
          model: Users,
          attributes: ["user_id"],
        },
        {
          model: Recipe_Img,
          attributes: ["image_url"],
        },
      ],
    });
    res.render("recipeView", {
      title: "레시피 상세페이지",
    });
    /*

  "recipe_num": 1,
  "user_num": 1,
  "title": "레몬 짐빔 레시피",
  "content": "1. 우선 재료를 준비한다.",
  "likes_count": 5,
  "main_ingredient": "하이볼",
  "main_ing_detail": "짐빔_버본 토닉워터",
  "sub_ingredient_detail": "콜라 물",
  "user": {
    "user_id": "user"
  },
  "Recipe_Imgs": [
    {
      "image_url": "/uploads/recipe/1_img1.png"
    }
  ]
}
        */
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
    // console.log('error');
  }
};

// 레시피 작성 버튼 클릭시  - 완
exports.getRecipeWrite = (req, res) => {
  // res.render('recipeWrite',{
  res.render("test-recipeWrite", {
    title: "글 작성",
    isLogin: true,
  });
};

// 레시피 작성페이지에서 저장 버튼 클릭시
exports.postRecipeWrite = async (req, res) => {
  try {
        // req.session. 을 이용하여 유저 정보 저장하기
    console.log("레시피 저장 버튼 클릭 postRecipe >> \n", req.body);
    /*
    {
      title: '1',
      main_ingredient: 'vodka',
      main_ing_detail: '2',
  main_img: {},
  content: '<div><div>Step 1</div><div>4</div></div>',
  sub_imgs: [ null ]
  }
  */
    const { recipeTitle, content, mainIng, mainIngDetail,
        sub_ingredient} = req.body;
    
    console.log(`recipeTitle : ${recipeTitle}\n
, recipeRawHtml : ${content}\n
, mainIng : ${mainIng}\n
, mainIngDetail : ${mainIngDetail}\n
, subIngList : ${sub_ingredient}
`);
    
    // 레시피 정보 db 저장
    
    const newRecipe = await Recipes.create({
        title : recipeTitle,
        user_num : 1,
        content : '물을따른다',
        main_ingredient : mainIng,
        main_ing_detail : mainIngDetail,
        sub_ingredient_detail : '라임,탄산수'
    });

    var imgFileArr = req.files; // 객체
    console.log('========\n req.files >> ',req.files, '\n =============');

    //  완료된 것 
    // filename 속성을 추출하는 함수
    const extractFilenames = (imgArr) => {
        const filenames = [];
        for (const key in imgArr) {
        if (Object.prototype.hasOwnProperty.call(imgArr, key)) {
                imgArr[key].forEach((file) => {
                    // console.log("file.filename",file.filename);
            filenames.push(file.filename);
            });
            }
        }
        return filenames;
    };
    
    // 추출된 filename들
    const filenames = extractFilenames(imgFileArr);
    // console.log(filenames.length);
    for (i = 0; i < filenames.length; i++) {
        console.log("i >> ",i, filenames[i]);
        // 이미지 파일 db 저장
        const newImage = await Recipe_Img.create({
        recipe_num : 1,
        image_url : "/uploads/recipe/" + filenames[i],
        main_img : 1 //req.body.main_image 0,1 넘겨주기
        });
    }
    
    // res.send("saved"); 
    res.send("savedtt"); // 프론트로 다시 보내주는 것 

    // res.redirect('/') 작성 완료 버튼을 누를시 홈으로 돌아가기
  } catch (error) {
    console.error("postRecipeWrite 오류발생:", error);
    res.status(500).send("레시피 작성버튼 클릭시 에러 발생! ");
  }
};

// 레시피 수정 - 프엔연결 필요
exports.patchRecipe = async (req, res, next) => {
  console.log(`update >>> `, req.params);
  try {
    const result = await Recipes.update(
      {
        title,
        content,
        main_ingredient,
        main_ing_detail,
        sub_ingredient_detail,
      },
      {
        where: { recipe_num },
      }
    );
    res.json(result);
  } catch (error) {
    console.error(error);
  }
};

// 레시피 삭제 - 프엔연결 필요
exports.deleteRecipe = async (req, res) => {
  try {
    const { recipe_num } = req.params;
    const isDeleted = await Recipes.destroy({
      where: { recipe_num },
    });
    console.log(isDeleted); // 삭제되면 1 , 삭제실패시 0

    if (isDeleted) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  } catch (error) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
