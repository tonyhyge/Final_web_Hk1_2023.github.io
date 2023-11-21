
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add New</title>
    <style>
        :root {
            --body-bg-color: #e4e6f5;
            --border-color: #e5e4e9;
            --theme-bg-color: white;
            --body-color: black;
            --main-color: #7a7e9d;
            --main-light-color: #a1a4b9;
            --title-color: #979dc3;
            --body-font: "Jost", sans-serif;
            --button-bg-color: #eaeefc;
            --button-color: #4d76fd;
            --unselected-mail: #f1f2f7;
            --calendar-border-color: #cbcfe0;
            --main-container-bg: #f0f0f7;
            --primary-clr: #4d76fd;
            /* --primary-clr: #4d76fd; */
            --tag-child1: #faedcb;
            --tag-child2 : #c9e4de;
            --tag-child3 :#C6DEF1;
            --tag-child4: #f2c6de;
            
            

        }

                .add-event-wrapper
        {
            /* position:absolute;  */
            /* width:40%;
            top:7% ; */
            /* overflow: hidden;s */
            /* max-height: 0%; */
            /* transition: max-height 0.4s; */
            /* min-height: 850px; */
            /* margin: 0 auto; */
            /* padding: 5px; */
            /* color: #fff; */
            /* display: flex; */
            border-radius: 30px;
            background-color:#373c4f;
            /* transition: max-height 0.5s;  */
            
            
        }




        .add-event-header-update{
            width: 100%;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            color: white;
            border-bottom: 1px solid #f5f5f5;
            background-color: var(--button-color);
            /* border-radius: 30px; */
            position: relative;
            font-size: 1.7rem;
        }
        .add-event-header{
            width: 100%;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            color: white;
            border-bottom: 1px solid #f5f5f5;
            background-color: var(--title-color);
            /* border-radius: 30px; */
            position: relative;

        }
        .add-event-header .close{
            font-size: 1rem;
            cursor: pointer;
        }
        .add-event-header .close:hover{
            color: black;
        }
        .add-event-header .title{
            font-size: 1.7rem;
            font-weight: 700;

        }
        .add-event-body{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 5px;
            padding: 20px;
            background-color: white;
        }
        .add-event-body .add-event-input{
            /* width: 100%;  */
            /* height: 40px; */
            /* display: flex;  */

            align-items: center;
            /* justify-content: space-evenly; */
            gap: 10px;
            padding:  0 10px 20px;
            font-size: 1rem;
            font-weight: 400;
            color: #373c4f;


        }

        .add-event-body .add-event-input input{
            width: 45%; 
            /* height: 100%;
            /* position: relative; */
            outline: none;
            border: none;
            border-bottom:      1px solid  #f5f5f5;
            /* justify-content:; */

        }


        .add-event-body .add-event-input input::placeholder{
            color: #a5a5a5;
        }
        .add-event-body .add-event-input input:focus{
            border-color: var(--button-color);
        }
        .add-event-body .add-event-input input:focus ::placeholder{
            color: var(--button-color);
        }
        .add-event-footer{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .add-event-btn{
            height: 40px;
            font-size: 1rem;
            font-weight: 500;
            outline: none;
            color: white;
            background-color: var(--button-color);
            border-radius: 5px;
            cursor: pointer;
            padding: 5px 10px;
            border: 1px solid var(--button-color);
        }
        .add-event-btn:hover{
            color: var(--button-color);
            background-color: transparent;
        }


        .add-event{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            font-size: 1rem;
            font-weight: 500;
            outline: none;
            color: white;
            border: 2px solid var(--button-color);

            background-color: var(--button-color);
            border-radius: 5px;
            cursor: pointer;
            padding: 5px 10px;


        }
        .add-event:hover{
            color: var(--button-color);
            background-color: transparent;
        }
        .map{
            height: 0;
            width: 0%;
        }


        .map.active{
            height: 400px;
            width: 100%;

        }






    </style>
</head>
<body>


    <form method="post">
        <div class="add-event-wrapper  ">
            <div class="add-event-header">
                <div class="title">Event Update</div>

            </div>
            <div class="add-event-body">
                <div class="add-event-input">
                    <input type="text" id="event-name_pre" name="event-name_pre" placeholder="Event Name" class="event-name">
                </div>
                <div class="add-event-input">
                    <input id="location_pre"type="text" name="location_pre" placeholder="Location" class="event-location">
                </div>
                <div class="add-event-input">
                    <!-- <input type="text" id="event-from" name="event-from" placeholder="From" class="event-from"> -->
                    <input type="text" name="time_pre" id="event-to_pre" placeholder="Time" class="event-to">
                </div>
                <!-- <div class="add-event-input">
                    <input type="text" id="event-note" placeholder="Note" class="event-note">
                    
                </div> -->
                <div class="add-event-input">
                    <input type="text" id="event-note" name="day_pre" placeholder="day" class="event-note">
                    
                </div>
                <div class="add-event-input">
                    <input type="text" id="event-note" name="month_pre" placeholder="month" class="event-note">
                    
                </div>
                <div class="add-event-input">
                    <input type="text" id="event-note" name="year_pre" placeholder="year" class="event-note">
                    
                </div>
                <!-- <div class="add-event-footer">
                    <input type="submit" id="add-event" name="add" value="ADD"class="add-event-btn"></button>
                    <a href="index.php"><input type="button" class="add-event-btn" value="EXIT"></a>
                </div> -->
                <!-- <form method="post"> -->

                        <div class="add-event-header-update">
                            <div class="title"> Update</div>

                        </div>
                        <div class="add-event-body">
                            <div class="add-event-input">
                                <input type="text" id="event-name" name="event-name" placeholder="Event Name" class="event-name">
                            </div>
                            <div class="add-event-input">
                                <input id="location"type="text" name="location" placeholder="Location" class="event-location">
                            </div>
                            <div class="add-event-input">
                                <!-- <input type="text" id="event-from" name="event-from" placeholder="From" class="event-from"> -->
                                <input type="text" name="time" id="event-to" placeholder="Time" class="event-to">
                            </div>
                            <!-- <div class="add-event-input">
                                <input type="text" id="event-note" placeholder="Note" class="event-note">
                                
                            </div> -->
                            <div class="add-event-input">
                                <input type="text" id="event-note" name="day" placeholder="Day" class="event-note">
                                
                            </div>
                            <div class="add-event-input">
                                <input type="text" id="event-note" name="month" placeholder="Month" class="event-note">
                                
                            </div>
                            <div class="add-event-input">
                                <input type="text" id="event-note" name="year" placeholder="Year" class="event-note">
                                
                            </div>
                            <div class="add-event-footer">
                                <input type="submit" id="add-event" name="update" value="UPDATE"class="add-event-btn"></button>
                                <a href="index.php"><input type="button" class="add-event-btn" value="EXIT"></a>
                            </div>
                            
                        </div>

                </form>
                
            </div>
        </div>
    </form>
    <?php
if(isset($_POST['update'])){
    include_once("db_config.php");
    $cn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_CONNECTION);
    if ($cn -> connect_error){
        die("Lỗi kết nối: ". $cn -> connect_error);
    }
    // if($cn === false){
    //     die("ERROR: Could not connect. "
    //         . mysqli_connect_error());
    // }
    // $sql  = "INSERT INTO events (day,month,year,title,location,time)  values ('$day', '$month','$year','$title','$location','$time')";
    $stml  =$cn ->prepare("UPDATE events 
    SET day = ?, month = ?, year = ?, title = ?, location = ?, time = ?
    WHERE day = ? AND  month = ? AND year = ? AND title = ? AND location = ? AND time = ?");
    // WHERE day = {$day} AND month = {$month} AND year = {$year} AND title = {$title} AND location = {$location} AND time = {$time}");
    // AND month = ? AND year =  AND title = ? AND location = ? AND time = ?

    $stml -> bind_param("iiisssiiisss", $day_pre, $month_pre,$year_pre,$title_pre,$location_pre,$time_pre,$day,$month, $year,$title,$location,$time);
    $title_pre = $_POST["event-name_pre"];
    $day_pre = $_POST["day_pre"];
    $month_pre = $_POST["month_pre"];
    $year_pre = $_POST["year_pre"];
    $location_pre = $_POST["location_pre"];
    $time_pre = $_POST["time_pre"];


    $title = $_POST["event-name"];
    $day = $_POST["day"];
    $month = $_POST["month"];
    $year = $_POST["year"];
    $location = $_POST["location"];
    $time = $_POST["time"];

    // $query=mysqli_query($cn, $sql);
    if($stml ->execute()===true){
        $cn ->close();  
        header("location:index.php");
    }else{
   $cn->close();}

    $stml->close();
    }

?>


</body>
</html>
