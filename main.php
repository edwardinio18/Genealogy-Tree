<?php

session_start();

$server = "127.0.0.1";
$user = "root";
$password = "";

$conn = mysqli_connect($server, $user, $password);

$db;
$table;
$newDBName;
$newTableName;
$firstName;
$surname;
$age;
$relation;
$newAge = "";

if (isset($_POST["db_name"])) {

	if (isset($_GET["deleteDB"])) {

		if ($_GET["deleteDB"] == "true") {

			$oldDB = $_SESSION["db"] . "Iakab";

			$query = "DROP DATABASE $oldDB;";
			$stmt = $conn->prepare($query);
			$stmt->execute();
		}

		if (isset($_POST["db_name"])) {

			$db = $_POST["db_name"];
		}

		$_SESSION["db"] = $db;

		if (isset($_POST["table_name"])) {

			$table = $_POST["table_name"];
		}

		$_SESSION["table"] = $table;

		$newDBName = $db . "Iakab";
		$newTableName = $table . "Iakab";

		$_SESSION["newDBName"] = $newDBName;
		$_SESSION["newTableName"] = $newTableName;

		$query = "CREATE DATABASE $newDBName;";
		$stmt = $conn->prepare($query);
		$stmt->execute();

		$newDBConn = mysqli_connect($server, $user, $password, $newDBName);

		$query = "CREATE TABLE $newTableName (id INT(10) AUTO_INCREMENT PRIMARY KEY, nume VARCHAR(25) NOT NULL, prenume VARCHAR(25) NOT NULL, varsta INT(3), grad VARCHAR(25) NOT NULL);";
		$stmt = $newDBConn->prepare($query);
		$stmt->execute();
	} else {

		if (isset($_POST["db_name"])) {

			$db = $_POST["db_name"];
		}

		$_SESSION["db"] = $db;

		if (isset($_POST["table_name"])) {

			$table = $_POST["table_name"];
		}

		$_SESSION["table"] = $table;

		$newDBName = $db . "Iakab";
		$newTableName = $table . "Iakab";

		$_SESSION["newDBName"] = $newDBName;
		$_SESSION["newTableName"] = $newTableName;

		$query = "CREATE DATABASE $newDBName;";
		$stmt = $conn->prepare($query);
		$stmt->execute();

		$newDBConn = mysqli_connect($server, $user, $password, $newDBName);

		$query = "CREATE TABLE $newTableName (id INT(10) AUTO_INCREMENT PRIMARY KEY, nume VARCHAR(25) NOT NULL, prenume VARCHAR(25) NOT NULL, varsta INT(3), grad VARCHAR(25) NOT NULL);";
		$stmt = $newDBConn->prepare($query);
		$stmt->execute();
	}
} else if (isset($_POST["surname"])) {

	if (isset($_POST["surname"])) {

		$surname = $_POST["surname"];
	}

	$_SESSION["surname"] = $surname;

	if (isset($_POST["first_name"])) {

		$firstName = $_POST["first_name"];
	}

	$_SESSION["first_name"] = $firstName;

	if (isset($_POST["age"])) {

		$age = $_POST["age"];
	}

	$_SESSION["age"] = $age;

	if (isset($_POST["relation"])) {

		$relation = $_POST["relation"];
	}

	$_SESSION["relation"] = $relation;

	$newDBName = $_SESSION["newDBName"];
	$newTableName = $_SESSION["newTableName"];

	$newDBConn = mysqli_connect($server, $user, $password, $newDBName);

	$query = "INSERT INTO $newTableName (nume, prenume, varsta, grad) VALUES (?, ?, ?, ?);";
	$stmt = $newDBConn->prepare($query);
	$stmt->bind_param("ssis", $surname, $firstName, $age, $relation);
	$stmt->execute();
} else if (isset($_POST["dataIndex"])) {

	$newDBName = $_SESSION["newDBName"];
	$newTableName = $_SESSION["newTableName"];

	$newDBConn = mysqli_connect($server, $user, $password, $newDBName);

	$output = "";

	if ($_POST["dataIndex"] == "1") {

		$query = "SELECT * FROM $newTableName;";
		$stmt = $newDBConn->prepare($query);
		$stmt->execute();
		$result = $stmt->get_result();

		if ($result->num_rows >= 1) {

			while ($row = $result->fetch_assoc()) {

				if ($row["varsta"] == 1) {

					$newAge = $row["varsta"] . " an";
				} else if ($row["varsta"] == -1) {

					$newAge = "decedat/a";
				} else {

					$newAge = $row["varsta"] . " ani";
				}

				$output .= '<div id="results_data_inner_container">
									
									<li class="results_each_content_list_item"><span class="dot">&#9679;</span><p class="results_each_content">' . $row["grad"] . ": " . $row["nume"] . " " . $row["prenume"] . ", " . $newAge . '</p></li>

								</div>';
			}
		} else {

			$output .= "<p id='no_results_found'>Nu exista!</p>";
		}
	} else if ($_POST["dataIndex"] == "2") {

		$query = "SELECT * FROM $newTableName WHERE varsta < ? && varsta != ?;";
		$stmt = $newDBConn->prepare($query);
		$under = 30;
		$alive = -1;
		$stmt->bind_param("ii", $under, $alive);
		$stmt->execute();
		$result = $stmt->get_result();

		if ($result->num_rows >= 1) {

			while ($row = $result->fetch_assoc()) {

				if ($row["varsta"] == 1) {

					$newAge = $row["varsta"] . " an";
				} else if ($row["varsta"] == -1) {

					$newAge = "decedat/a";
				} else {

					$newAge = $row["varsta"] . " ani";
				}

				$output .= '<div id="results_data_inner_container">
									
									<li class="results_each_content_list_item"><span class="dot">&#9679;</span><p class="results_each_content">' . $row["grad"] . ": " . $row["nume"] . " " . $row["prenume"] . ", " . $newAge . '</p></li>

								</div>';
			}
		} else {

			$output .= "<p id='no_results_found'>Nu exista!</p>";
		}
	} else if ($_POST["dataIndex"] == "3") {

		$query = "SELECT * FROM $newTableName WHERE varsta > ?;";
		$stmt = $newDBConn->prepare($query);
		$over = 15;
		$stmt->bind_param("i", $over);
		$stmt->execute();
		$result = $stmt->get_result();

		if ($result->num_rows >= 1) {

			while ($row = $result->fetch_assoc()) {

				if ($row["varsta"] == 1) {

					$newAge = $row["varsta"] . " an";
				} else if ($row["varsta"] == -1) {

					$newAge = "decedat/a";
				} else {

					$newAge = $row["varsta"] . " ani";
				}

				$output .= '<div id="results_data_inner_container">
									
									<li class="results_each_content_list_item"><span class="dot">&#9679;</span><p class="results_each_content">' . $row["grad"] . ": " . $row["nume"] . " " . $row["prenume"] . ", " . $newAge . '</p></li>

								</div>';
			}
		} else {

			$output .= "<p id='no_results_found'>Nu exista!</p>";
		}
	} else if ($_POST["dataIndex"] == "4") {

		$query = "SELECT * FROM $newTableName WHERE grad = ? || grad = ?;";
		$stmt = $newDBConn->prepare($query);
		$brother = "frate";
		$sister = "sora";
		$stmt->bind_param("ss", $brother, $sister);
		$stmt->execute();
		$result = $stmt->get_result();

		if ($result->num_rows >= 1) {

			while ($row = $result->fetch_assoc()) {

				if ($row["varsta"] == 1) {

					$newAge = $row["varsta"] . " an";
				} else if ($row["varsta"] == -1) {

					$newAge = "decedat/a";
				} else {

					$newAge = $row["varsta"] . " ani";
				}

				$output .= '<div id="results_data_inner_container">
									
									<li class="results_each_content_list_item"><span class="dot">&#9679;</span><p class="results_each_content">' . $row["grad"] . ": " . $row["nume"] . " " . $row["prenume"] . ", " . $newAge . '</p></li>

								</div>';
			}
		} else {

			$output .= "<p id='no_results_found'>Nu exista!</p>";
		}
	} else if ($_POST["dataIndex"] == "5") {

		$query = "SELECT * FROM $newTableName WHERE varsta != ? AND (nume LIKE ? OR nume LIKE ? OR prenume LIKE ? OR prenume LIKE ?);";
		$stmt = $newDBConn->prepare($query);
		$alive = -1;
		$charA = "%a%";
		$charE = "%e%";
		$stmt->bind_param("issss", $alive, $charA, $charE, $charA, $charE);
		$stmt->execute();
		$result = $stmt->get_result();

		if ($result->num_rows >= 1) {

			while ($row = $result->fetch_assoc()) {

				if ($row["varsta"] == 1) {

					$newAge = $row["varsta"] . " an";
				} else if ($row["varsta"] == -1) {

					$newAge = "decedat/a";
				} else {

					$newAge = $row["varsta"] . " ani";
				}

				$output .= '<div id="results_data_inner_container">
									
									<li class="results_each_content_list_item"><span class="dot">&#9679;</span><p class="results_each_content">' . $row["grad"] . ": " . $row["nume"] . " " . $row["prenume"] . ", " . $newAge . '</p></li>

								</div>';
			}
		} else {

			$output .= "<p id='no_results_found'>Nu exista!</p>";
		}
	}

	echo $output;
}
