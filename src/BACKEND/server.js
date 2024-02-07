const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');
const moment = require("moment");
const cors = require("cors");
const sql = require("mssql");
const bodyParser = require("body-parser");
const token =
  "03ti9vnhmrwq0qhinzsw5jkj0cad97jtl1n0fpywzxloj4m0yi7kj9b0pk0m623r0elmq";

const app = express();
const PORT = 5000;
const PROXY_TARGET = 'http://usplbot.com';
app.use(cors());

const wsProxy = createProxyMiddleware({
  target: PROXY_TARGET,
  changeOrigin: true,
  ws: true
});

// Use the WebSocket proxy middleware
app.use('/socket.io/', wsProxy);


app.use(bodyParser.json());

// load mysql package
const mysql = require("mysql");

// create mysql connection
const connection = mysql.createConnection({
  host: "65.21.7.252",
  user: "dba",
  password: "Sapl@2023",
  database: "USPL",
});

// check connection
connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("We are now successfully connected with mysql database");
  }
});
// TODAY'S TRADE HISTORY
app.get("/trendreport", (req, res) => {
  const today = moment().format("YYYY-MM-DD");
  const userId = 1;
  const fromDt = today;
  const toDt = today;
  const reportType = "fixmargin";

  connection.query(
    "CALL sp_getTradeHistoryReport(?, ?, ?, ?)",
    [userId, fromDt, toDt, reportType],
    (error, results, fields) => {
      if (error) {
        console.error("Error executing the stored procedure:", error);
        res
          .status(500)
          .json({ error: "Internal Server Error", message: error.message });
        return;
      }
      res.json(results);
      console.log(results);
    }
  );
});
// TOTAL PROFIT AND LOSS
// app.get("/getTradeHistory", (req, res) => {
//   const today = moment().format("YYYY-MM-DD");

//   const userId = 1;
//   const fromDt = today;
//   const toDt = today;
//   connection.query(
//     "CALL sp_getTodayTradeHistoryReport(?, ?, ?)",
//     [userId, fromDt, toDt],
//     (error, results, fields) => {
//       if (error) {
//         console.error("Error executing the stored procedure:", error);
//         res
//           .status(500)
//           .json({ error: "Internal Server Error", message: error.message });
//         return;
//       }
//       res.json(results[1]);
//       console.log(results[1]);
//     }
//   );
// });

// fixmargin userinput Date
app.get("/fixmargin", (req, res) => {
  const today = moment().format("YYYY-MM-DD");
  const userId = 1;
  const fromDt = req.query.fromDt || moment().format("YYYY-MM-DD");
  const toDt = req.query.toDt || moment().format("YYYY-MM-DD");
  const reportType = "fixmargin";

  connection.query(
    "CALL sp_getTradeHistoryReport(?, ?, ?, ?)",
    [userId, fromDt, toDt, reportType],
    (error, results, fields) => {
      if (error) {
        console.error("Error executing the stored procedure:", error);
        res
          .status(500)
          .json({ error: "Internal Server Error", message: error.message });
        return;
      }
      res.json(results);
      console.log(results);
    }
  );
});
 



// fixlot user input date
app.get("/fixlot", (req, res) => {
  const userId = 1;
  const fromDt = req.query.fromDt || moment().format("YYYY-MM-DD");
  const toDt = req.query.toDt || moment().format("YYYY-MM-DD");
  const reportType = "fixlot";

  connection.query(
    "CALL sp_getTradeHistoryReport(?, ?, ?, ?)",
    [userId, fromDt, toDt, reportType],
    (error, results, fields) => {
      if (error) {
        console.error("Error executing the stored procedure:", error);
        res
          .status(500)
          .json({ error: "Internal Server Error", message: error.message });
        return;
      }
      res.json(results);
      console.log(results);
    }
  );
});

// cummulative user input date
app.get("/cumilative", (req, res) => {
  const today = moment().format("YYYY-MM-DD");
  const userId = 1;
  const fromDt = req.query.fromDt || moment().format("YYYY-MM-DD");
  const toDt = req.query.toDt || moment().format("YYYY-MM-DD");
  const reportType = "cumilative";

  connection.query(
    "CALL sp_getTradeHistoryReport(?, ?, ?, ?)",
    [userId, fromDt, toDt, reportType],
    (error, results, fields) => {
      if (error) {
        console.error("Error executing the stored procedure:", error);
        res
          .status(500)
          .json({ error: "Internal Server Error", message: error.message });
        return;
      }
      res.json(results);
      console.log(results);
    }
  );
});

//  ENDPOINT FOR FIXMNARGIN CHART
app.get("/fixmargin_chart", (req, res) => {
  const today = moment().format("YYYY-MM-DD");
  const userId = 1;
  const fromDt = req.query.fromDt || moment().format("YYYY-MM-DD");
  const toDt = req.query.toDt || moment().format("YYYY-MM-DD");
  const reportType = "fixmargin";

  connection.query(
    "CALL sp_getTradeHistoryReport(?, ?, ?, ?)",
    [userId, fromDt, toDt, reportType],
    (error, results, fields) => {
      if (error) {
        console.error("Error executing the stored procedure:", error);
        res
          .status(500)
          .json({ error: "Internal Server Error", message: error.message });
        return;
      }
      res.json(results[0]);
      console.log(results[0]);
    }
  );
});

//  ENDPOINT FOR FIXLOT CHART
app.get("/fixlot_chart", (req, res) => {
  const userId = 1;
  const fromDt = req.query.fromDt || moment().format("YYYY-MM-DD");
  const toDt = req.query.toDt || moment().format("YYYY-MM-DD");
  const reportType = "fixlot";

  connection.query(
    "CALL sp_getTradeHistoryReport(?, ?, ?, ?)",
    [userId, fromDt, toDt, reportType],
    (error, results, fields) => {
      if (error) {
        console.error("Error executing the stored procedure:", error);
        res
          .status(500)
          .json({ error: "Internal Server Error", message: error.message });
        return;
      }
      res.json(results[0]);
      console.log(results[0]);
    }
  );
});

//  ENDPOINT FOR CUMILATIVE CHART

app.get("/cumilative_chart", (req, res) => {
  const today = moment().format("YYYY-MM-DD");
  const userId = 1;
  const fromDt = req.query.fromDt || moment().format("YYYY-MM-DD");
  const toDt = req.query.toDt || moment().format("YYYY-MM-DD");
  const reportType = "cumilative";

  connection.query(
    "CALL sp_getTradeHistoryReport(?, ?, ?, ?)",
    [userId, fromDt, toDt, reportType],
    (error, results, fields) => {
      if (error) {
        console.error("Error executing the stored procedure:", error);
        res
          .status(500)
          .json({ error: "Internal Server Error", message: error.message });
        return;
      }
      res.json(results[0]);
      console.log(results[0]);
    }
  );
});


const executeStoredProcedure = (procedureName, params) => {
  return new Promise((resolve, reject) => {
    connection.query(`CALL ${procedureName}(${params.map(() => '?').join(', ')})`, params, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};


app.post("/registerUser", async (req, res) => {
  try {
    const formData = req.body;
    formData.RegisterTime = moment().format("YYYY-MM-DD HH:mm:ss");

    const result = await executeStoredProcedure("sp_registerDetails", [
      formData.UserType,
      formData.FirstName,
      formData.Limit,
      formData.Email,
      formData.MobileNo,
      formData.UserName,
      formData.Password,
      formData.RegisterTime,
    ]);

    console.log(result);

    res.status(200).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error", message: error.message });
  }
});

// API endpoint for getting user details by UserName and Password
app.post("/getUserDetails", async (req, res) => {
  try {
    const { UserName, Password } = req.body;

    // Execute SQL SELECT statement
    const selectQuery = `
      SELECT User_Type ,FirstName, InvestLimit, Email, MobileNo, LoginId
      FROM tbl_User
      WHERE LoginId = ? AND Password = ?
    `;

    // Execute the select query
    connection.query(selectQuery, [UserName, Password], (error, results) => {
      if (error) {
        console.error("Error getting user details:", error);
        res.status(500).json({ error: "Internal Server Error", message: error.message });
      } else {
        // Check if user details were found
        if (results.length > 0) {
          // Handle the result as needed
          console.log(results);
          res.status(200).json({ success: true, data: results[0] });
        } else {
          // No user found with the given credentials
          res.status(404).json({ success: false, message: "User not found" });
        }
      }
    });
  } catch (error) {
    console.error("Error getting user details:", error);
    res.status(500).json({ error: "Internal Server Error", message: error.message });
  }
});

// API endpoint for updating user details
app.post("/updateUserDetails", async (req, res) => {
  try {
    const { UserName, ...updatedDetails } = req.body;

    // Execute SQL UPDATE statement
    const updateQuery = `
      UPDATE tbl_User
      SET FirstName = ?, InvestLimit = ?, Email = ?, MobileNo = ?
      WHERE LoginId = ?
    `;

    // Execute the update query
    connection.query(
      updateQuery,
      [
        updatedDetails.FirstName,
        updatedDetails.InvestLimit,
        updatedDetails.Email,
        updatedDetails.MobileNo,
        UserName,
      ],
      (error, results) => {
        if (error) {
          console.error("Error updating user details:", error);
          res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
        } else {
          // Check if any rows were affected (indicating a successful update)
          if (results.affectedRows > 0) {
            res.status(200).json({ success: true, message: "User details updated successfully" });
          } else {
            // No user found with the given UserName or no changes made
            res.status(404).json({ success: false, message: "User not found or no changes made" });
          }
        }
      }
    );
  } catch (error) {
    console.error("Error updating user details:", error);
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
});

app.get("/getThoughtOfTheDay", (req, res) => {
  // Call the stored procedure sp_GetThoughts
  connection.query("CALL sp_GetThoughts()", (error, results, fields) => {
    if (error) {
      console.error("Error executing the stored procedure:", error);
      res.status(500).json({
        error: "Internal Server Error",
        message: error.message,
      });
      return;
    }
    res.json(results);
      console.log(results);

    // const thoughtOfTheDay = results[0][0]?.thought;

    // // Send the thought of the day in the response
    // res.json({ thoughtOfTheDay });
  });
});






const { io } = require("socket.io-client");
const socket = io("http://usplbot.com");

socket.on("connect", () => {
  console.log("connected to usplbot.com");
});

socket.on("traded_optionsV2", (message) => {
  console.log(JSON.stringify(message));
  let arr = message.HA;
  // console.log(JSON.stringify(arr[arr.length - 1]));
});

socket.on("candlemin", (message) => {
  // console.log(JSON.stringify(message));
  console.log(message);
  let arr = message.HA;
  // console.log(JSON.stringify(arr[arr.length - 1]));
});

socket.on('dataReceived', message => {
  // console.log(JSON.stringify(message));
  if (message.Symbol === 'NIFTY BANK') {
      console.log(message);
      console.log(message.Price);
 
  }
 
})


app.listen(PORT, () => {
  console.log(`Proxy server is running on  port ${PORT}`);
});
