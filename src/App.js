import './App.scss';

function App() {

  return (
    <div className="App">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Feeding Tofu</title>
      </head>
      <body>
        <div className="app">
          <img className="profile-image" src="/img/profile.svg" alt="profile" />

          <h1>Feeding Tofu</h1>
          <div className="input-fields">
            {/* User can choose name from here, whoever is feeding the pet */}

            <label className="who-is-feeding" for="choice"
            >🐈 Who is feeding? <span>*</span>
            </label>

            <select id="who-is-feeding" name="choice" id="add-meal-time">
              <option value="" selected disabled hidden>Select Name</option>
              <option value="User 1">User 1</option>
              <option value="User 2">User 2</option>
              <option value="User 3">User 3</option>
              <option value="User 4">User 4</option>
            </select>

            {/* User can select the meal-size from here */}

            <label className="meal-size" for="choice"
            >🐟 How much are you feeding? <span>*</span></label
            >

            <select name="choice" id="add-meal-size">
              <option value="" selected disabled hidden>Select Meal Type</option>
              <option value="Full Meal">Full Meal</option>
              <option value="Half Meal">Half Meal</option>
              <option value="Snack">Snack</option>
            </select>

            <label className="meal-size" for="choice">📋 Note</label>

            <form action="">
              <input
                maxlength="50"
                type="text"
                id="note"
                placeholder="e.g. Gave extra food"
              />
            </form>

            <button id="submit" className="submit" onclick="submitData()">
              Submit
            </button>
          </div>

          <div className="feeding-record">
            <h1>Feeding Time Table</h1>

            {/* All table data starts */}


            {/* Table data ends */}


          </div>
        </div>
        <script src="/main.js"></script>
      </body>
    </div>
  );
}

export default App;
