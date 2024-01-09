$(document).ready(function () {
  var side = "left";
  var deleteDB = false;

  $("#db_name").focus();

  function createDBAndTable(e) {
    e.preventDefault();

    var form = $("#db_table_form");
    var formData = form.serialize();

    if (!deleteDB) {
      $.ajax({
        type: "POST",
        url: "main.php",
        data: formData,
        success: function (data) {
          $("#main_container").removeAttr("style");
          $("#main_container").css("right", "0px");
          $("#main_container").css("opacity", "1");

          if (side == "right") {
            $("#main_container").css("height", "363px");
            $("#main_container").css("width", "500px");

            $("#main_container").animate(
              {
                right: "350px",
                opacity: "0",
              },
              400
            );

            $("#title_container").fadeOut(400, function () {
              var output = "";

              output +=
                '<form method="POST" action="main.php" id="insert_data_form"><input type="text" id="surname" name="surname" placeholder="Nume" class="form_input" /><br /><input type="text" name="first_name" placeholder="Prenume" class="form_input" /><br /><input type="number" name="age" placeholder="Varsta" class="form_input" /><br /><input type="text" name="relation" placeholder="Grad" class="form_input" /><br /><input type="submit" name="insert_db_and_table" value="Insereaza" class="form_submit" /></form><br /><button class="main_buttons" id="interogations">Interogari</button><br /><button class="main_buttons_new_db" id="create_new_db_and_table">Creeaza baza & tabel nou</button>';

              $("#main_container").empty();

              $("#title_label").text("Inserare om");

              $("#title_container").fadeIn(400);

              $("#main_container").html(output);

              $("#main_container").css("right", "-350px");
              $("#main_container").css("height", "500px");
              $("#main_container").css("width", "500px");

              $("#main_container").animate(
                {
                  opacity: "1",
                  right: "0px",
                },
                function () {
                  $("#surname").focus();
                }
              );
            });
          } else {
            $("#main_container").animate(
              {
                right: "350px",
                opacity: "0",
              },
              400
            );

            $("#title_container").fadeOut(400, function () {
              var output = "";

              output +=
                '<form method="POST" action="main.php" id="insert_data_form"><input type="text" id="surname" name="surname" placeholder="Nume" class="form_input" /><br /><input type="text" name="first_name" placeholder="Prenume" class="form_input" /><br /><input type="number" name="age" placeholder="Varsta" class="form_input" /><br /><input type="text" name="relation" placeholder="Grad" class="form_input" /><br /><input type="submit" name="insert_db_and_table" value="Insereaza" class="form_submit" /></form><br /><button class="main_buttons" id="interogations">Interogari</button><br /><button class="main_buttons_new_db" id="create_new_db_and_table">Creeaza baza & tabel nou</button>';

              $("#main_container").empty();

              $("#title_label").text("Inserare om");

              $("#title_container").fadeIn(400);

              $("#main_container").html(output);

              $("#main_container").css("right", "-350px");
              $("#main_container").css("height", "500px");
              $("#main_container").css("width", "500px");

              $("#main_container").animate(
                {
                  opacity: "1",
                  right: "0px",
                },
                function () {
                  $("#surname").focus();
                }
              );
            });
          }
        },
      });
    } else {
      $.ajax({
        type: "POST",
        url: "main.php?deleteDB=true",
        data: formData,
        success: function (data) {
          $("#main_container").removeAttr("style");
          $("#main_container").css("right", "0px");
          $("#main_container").css("opacity", "1");

          if (side == "right") {
            $("#main_container").css("height", "363px");
            $("#main_container").css("width", "500px");

            $("#main_container").animate(
              {
                right: "350px",
                opacity: "0",
              },
              400
            );

            $("#title_container").fadeOut(400, function () {
              var output = "";

              output +=
                '<form method="POST" action="main.php" id="insert_data_form"><input type="text" id="surname" name="surname" placeholder="Nume" class="form_input" /><br /><input type="text" name="first_name" placeholder="Prenume" class="form_input" /><br /><input type="number" name="age" placeholder="Varsta" class="form_input" /><br /><input type="text" name="relation" placeholder="Grad" class="form_input" /><br /><input type="submit" name="insert_db_and_table" value="Insereaza" class="form_submit" /></form><br /><button class="main_buttons" id="interogations">Interogari</button><br /><button class="main_buttons_new_db" id="create_new_db_and_table">Creeaza baza & tabel nou</button>';

              $("#main_container").empty();

              $("#title_label").text("Inserare om");

              $("#title_container").fadeIn(400);

              $("#main_container").html(output);

              $("#main_container").css("right", "-350px");
              $("#main_container").css("height", "500px");
              $("#main_container").css("width", "500px");

              $("#main_container").animate(
                {
                  opacity: "1",
                  right: "0px",
                },
                function () {
                  $("#surname").focus();
                }
              );
            });
          } else {
            $("#main_container").animate(
              {
                right: "350px",
                opacity: "0",
              },
              400
            );

            $("#title_container").fadeOut(400, function () {
              var output = "";

              output +=
                '<form method="POST" action="main.php" id="insert_data_form"><input type="text" id="surname" name="surname" placeholder="Nume" class="form_input" /><br /><input type="text" name="first_name" placeholder="Prenume" class="form_input" /><br /><input type="number" name="age" placeholder="Varsta" class="form_input" /><br /><input type="text" name="relation" placeholder="Grad" class="form_input" /><br /><input type="submit" name="insert_db_and_table" value="Insereaza" class="form_submit" /></form><br /><button class="main_buttons" id="interogations">Interogari</button><br /><button class="main_buttons_new_db" id="create_new_db_and_table">Creeaza baza & tabel nou</button>';

              $("#main_container").empty();

              $("#title_label").text("Inserare om");

              $("#title_container").fadeIn(400);

              $("#main_container").html(output);

              $("#main_container").css("right", "-350px");
              $("#main_container").css("height", "500px");
              $("#main_container").css("width", "500px");

              $("#main_container").animate(
                {
                  opacity: "1",
                  right: "0px",
                },
                function () {
                  $("#surname").focus();
                }
              );
            });
          }
        },
      });
    }
  }

  function insertData(e) {
    e.preventDefault();

    var form = $("#insert_data_form");
    var formData = form.serialize();

    $.ajax({
      type: "POST",
      url: "main.php",
      data: formData,
      success: function (data) {
        if (side == "right") {
          $("#main_container").removeAttr("style");
          $("#main_container").css("right", "0px");
          $("#main_container").css("opacity", "1");
          $("#main_container").css("height", "433px");
          $("#main_container").css("width", "500px");

          $("#main_container").animate(
            {
              right: "350px",
              opacity: "0",
            },
            400
          );

          $("#title_container").fadeOut(400, function () {
            var output = "";

            output +=
              '<div id="main_buttons_container"><button class="main_buttons" id="interogations">Interogari</button><br /><button class="main_buttons" id="new_data_insert">Inserare noua</button><br /><button class="main_buttons_new_db" id="create_new_db_and_table">Creeaza baza & tabel nou</button></div>';

            $("#main_container").empty();

            $("#title_label").text("Interogari & inserare noua");

            $("#title_container").fadeIn(400);

            $("#main_container").html(output);

            $("#main_container").css("right", "-350px");
            $("#main_container").css("opacity", "0");
            $("#main_container").css("height", "243px");
            $("#main_container").css("width", "500px");

            $("#main_container").animate({
              opacity: "1",
              right: "0px",
            });
          });
        } else {
          $("#main_container").animate(
            {
              right: "350px",
              opacity: "0",
            },
            400
          );

          $("#title_container").fadeOut(400, function () {
            var output = "";

            output +=
              '<div id="main_buttons_container"><button class="main_buttons" id="interogations">Interogari</button><br /><button class="main_buttons" id="new_data_insert">Inserare noua</button><br /><button class="main_buttons_new_db" id="create_new_db_and_table">Creeaza baza & tabel nou</button></div>';

            $("#main_container").empty();

            $("#title_label").text("Interogari & inserare noua");

            $("#title_container").fadeIn(400);

            $("#main_container").html(output);

            $("#main_container").css("right", "-350px");
            $("#main_container").css("height", "243px");
            $("#main_container").css("width", "500px");

            $("#main_container").animate({
              opacity: "1",
              right: "0px",
            });
          });
        }
      },
    });
  }

  function newInsertData() {
    $("#main_container").animate(
      {
        left: "350px",
        opacity: "0",
      },
      400
    );

    $("#results_main_container").animate(
      {
        opacity: "0",
      },
      200
    );

    $("#title_container").fadeOut(400, function () {
      var output = "";

      output +=
        '<form method="POST" action="main.php" id="insert_data_form"><input type="text" id="surname" name="surname" placeholder="Nume" class="form_input" /><br /><input type="text" name="first_name" placeholder="Prenume" class="form_input" /><br /><input type="number" name="age" placeholder="Varsta" class="form_input" /><br /><input type="text" name="relation" placeholder="Grad" class="form_input" /><br /><input type="submit" name="insert_db_and_table" value="Insereaza" class="form_submit" /></form><br /><button class="main_buttons" id="interogations">Interogari</button><br /><button class="main_buttons_new_db" id="create_new_db_and_table">Creeaza baza & tabel nou</button>';

      $("#main_container").empty();

      $("#title_label").text("Inserare om");

      $("#title_container").fadeIn(400);

      $("#main_container").html(output);

      $("#main_container").css("left", "-350px");
      $("#main_container").css("height", "500px");
      $("#main_container").css("width", "500px");

      $("#main_container").animate(
        {
          opacity: "1",
          left: "0px",
        },
        function () {
          $("#surname").focus();
        }
      );
    });

    side = "right";
  }

  function interogations() {
    $("#main_container").animate(
      {
        right: "350px",
        opacity: "0",
      },
      400
    );

    $("#title_container").fadeOut(400, function () {
      var output = "";

      output +=
        "<div id='main_buttons_container'><button class='main_buttons_interogations' id='interogations_1' data-index='1' data-title='Toate rudele'>Toate rudele</button><br /><button class='main_buttons_interogations' id='interogations_2' data-index='2' data-title='Toate rudele < 30 ani & traiesc'>Toate rudele < 30 ani & traiesc</button><br /><button class='main_buttons_interogations' id='interogations_3' data-index='3' data-title='Toate rudele > 15 ani'>Toate rudele > 15 ani</button><br /><button class='main_buttons_interogations' id='interogations_4' data-index='4' data-title='Toti fratii & surorile'>Toti fratii & surorile</button><br /><button class='main_buttons_interogations' id='interogations_5' data-index='5' data-title='Toate rudele cu \"a\"/\"e\" in nume & traiesc'>Toate rudele cu \"a\"/\"e\" in nume & traiesc</button><br /><button class='main_buttons' id='new_data_insert'>Inserare noua</button><br /><button class='main_buttons_new_db' id='create_new_db_and_table'>Creeaza baza & tabel nou</button></div>";

      $("#main_container").empty();

      $("#title_label").text("Interogari");

      $("#title_container").fadeIn(400);

      $("#main_container").html(output);

      $("#main_container").css("right", "-350px");
      $("#main_container").css("height", "525px");
      $("#main_container").css("width", "525px");

      $("#main_container").animate({
        opacity: "1",
        right: "0px",
      });
    });

    side = "left";
  }

  function newDBAndTable() {
    $("#main_container").animate(
      {
        left: "350px",
        opacity: "0",
      },
      400
    );

    $("#results_main_container").animate(
      {
        opacity: "0",
      },
      200
    );

    $("#title_container").fadeOut(400, function () {
      var output = "";

      output +=
        '<form method="POST" action="main.php" id="db_table_form"><input type="text" id="db_name" name="db_name" placeholder="Nume baza de date" class="form_input" /><br /><input type="text" name="table_name" placeholder="Nume tabel" class="form_input" /><br /><input type="submit" name="insert_db_and_table" value="Creeaza" class="form_submit" /></form>';

      $("#main_container").empty();

      $("#title_label").text("Creare baza de date & tabel");

      $("#title_container").fadeIn(400);

      $("#main_container").html(output);

      $("#main_container").css("left", "-350px");
      $("#main_container").css("height", "235px");
      $("#main_container").css("width", "500px");

      $("#main_container").animate(
        {
          opacity: "1",
          left: "0px",
        },
        function () {
          $("#db_name").focus();
        }
      );
    });

    side = "left";
  }

  function displayInterogations(index, title) {
    $("#main_container").animate(
      {
        right: "350px",
      },
      400
    );

    $.ajax({
      url: "main.php",
      type: "POST",
      data: {
        dataIndex: index,
      },
      success: function (data) {
        $("#results_main_container").remove();

        var output = "";

        output +=
          '<div id="results_main_container" style="opacity: 0;"><h1 id="results_title_label">' +
          title +
          '</h1><div id="inner_results_container">' +
          data +
          "</div></div>";

        setTimeout(function () {
          $("#results_main_container").animate(
            {
              opacity: "1",
            },
            175
          );
        }, 175);

        $("body").append(output);

        side = "left";
      },
    });
  }

  $(document).on("submit", "#db_table_form", function (e) {
    createDBAndTable(e);
  });

  $(document).on("submit", "#insert_data_form", function (e) {
    insertData(e);
  });

  $(document).on("click", "#new_data_insert", function () {
    newInsertData();
  });

  $(document).on("click", "#interogations", function () {
    interogations();
  });

  $(document).on("click", "#create_new_db_and_table", function () {
    deleteDB = true;

    newDBAndTable();
  });

  $(document).on("click", ".main_buttons_interogations", function () {
    var index = $(this).data("index");
    var title = $(this).data("title");

    $(".main_buttons_interogations").removeClass("active");
    $(this).addClass("active");

    displayInterogations(index, title);
  });

  $(document).on("keypress", function (e) {
    if (!$("input").is(":focus")) {
      if (e.which == 55) {
        if ($("#create_new_db_and_table").is(":visible")) {
          deleteDB = true;

          newDBAndTable();
        }
      } else if (e.which == 56) {
        if ($("#new_data_insert").is(":visible")) {
          newInsertData();
        }
      } else if (e.which == 57) {
        if ($("#interogations").is(":visible")) {
          interogations();
        }
      } else if (e.which > 48 && e.which < 54) {
        if ($(".main_buttons_interogations").is(":visible")) {
          var index = String.fromCharCode(e.which);
          var title = $("#interogations_" + index).data("title");

          $(".main_buttons_interogations").removeClass("active");
          $("#interogations_" + index).addClass("active");

          displayInterogations(index, title);
        }
      }
    }
  });
});
