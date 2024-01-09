<!DOCTYPE html>

<html>

<head>

	<title>Proiect - baza de date PHP</title>

	<link rel="stylesheet" type="text/css" href="main.css" />

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

</head>

<body>

	<div id="background_cover_container"></div>

	<div class="top_right_guide_container">

		<p id="top_right_guide_label">Ghid</p>

		<p id="top_right_guide_label_2">( tasta g )</p>

	</div>

	<div id="main_middle_key_guide_container"></div>

	<div id="title_container">

		<h1 id="title_label">Creare baza de date & tabel</h1>

	</div>

	<div id="main_container">

		<form method="POST" action="main.php" id="db_table_form">

			<input type="text" id="db_name" name="db_name" placeholder="Nume baza de date" class="form_input" />

			<br />

			<input type="text" name="table_name" placeholder="Nume tabel" class="form_input" />

			<br />

			<input type="submit" name="insert_db_and_table" value="Creeaza" class="form_submit" />

		</form>

	</div>

</body>

<?php

$output = "";

$output .= '<p id="top_right_guide_label_1">Prescurtari</p><div id="main_outer_guide_key_container">';

$interogationsArray = [

	"1" => "prima",
	"2" => "a doua",
	"3" => "a treia",
	"4" => "a patra",
	"5" => "a cincea"

];

foreach ($interogationsArray as $i => $data) {

	$keyImagePath = "images/" . $i . "_key.png";

	$output .= '<div class="each_guide_container">

						<img src="' . $keyImagePath . '" class="each_guide_key_image" />

						<p class="each_guide_key_label">Tasta ' . $i . ' - ' . $data . ' interogare</p>

					</div>';
}

$keyArray = [

	"7" => "baza de date & tabel nou",
	"8" => "inserare noua",
	"9" => "afiseaza toate interogarile"

];

foreach ($keyArray as $i => $data) {

	$keyImagePath = "images/" . $i . "_key.png";

	$output .= '<div class="each_guide_container">

					<img src="' . $keyImagePath . '" class="each_guide_key_image" />

					<p class="each_guide_key_label">Tasta ' . $i . ' - ' . $data . '</p>

				</div>';
}

$output .= '</div>';

?>

<script type="text/javascript">
	$(document).on("keypress", function(e) {

		if (e.which == 103) {

			if ($("#main_middle_key_guide_container").hasClass("active")) {

				$("#main_middle_key_guide_container").removeClass("active");
				$("#main_middle_key_guide_container").animate({

					opacity: "0",

				}, 150, function() {

					$("#main_middle_key_guide_container").css("display", "none");

					if ($("#db_name").is(":visible")) {

						$("#db_name").focus();

					} else if ($("#surname").is(":visible")) {

						$("#surname").focus();

					}

				});

			} else {

				if (!$("input").is(":focus")) {

					$("#main_middle_key_guide_container").html(<?php echo json_encode($output); ?>);
					$("#main_middle_key_guide_container").addClass("active");
					$("#main_middle_key_guide_container").animate({

						opacity: "1",

					}, 150);

					$("#main_middle_key_guide_container").css("display", "block");

				}

			}

		}

	});
</script>

<script type="text/javascript" src="main.js"></script>

</html>