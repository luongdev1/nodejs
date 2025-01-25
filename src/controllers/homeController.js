import connection from "../config/database.js";

const homePage = (req, res) => {
     res.render('home.ejs')
}

const homePage1 = async (req, res) => {
     // A simple SELECT query
     try {
          const [results, fields] = await connection.query(
               'SELECT * FROM USERS'
          );
          res.json(results)

     } catch (err) {
          console.log(err);
     }

}


export { homePage, homePage1 }