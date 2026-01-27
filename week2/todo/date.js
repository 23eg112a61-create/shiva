/*Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss*/
   //1. Create a Date object for current date & time.   
     let date=new Date();
     //2. Extract and display:
        let year=date.getFullYear();
        let month=date.getMonth()+1;
        let day=date.getDate(); 
        let hours=date.getHours();
        let min=date.getMinutes();
        let sec=date.getSeconds();
        console.log(year);
        console.log(month);
        console.log(day);
        console.log(hours);
        console.log(min);
        console.log(sec);
        //3. Display the date in this format: DD-MM-YYYY HH:mm:ss
        console.log(`${day}-${month}-${year} ${hours}:${min}:${sec}`);
/*Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------
 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid
       */
        let enrollmentDeadline = new Date("2026-01-20");
        //1.Check if:
        if(date<enrollmentDeadline){
            console.log("Enrollment Open");
        }
        else{
            console.log("Enrollment Closed");
        }
        //2. Validate user input date:
        let inputDate="2026-02-30";
        let dateParts=inputDate.split("-");
        let yearInput=parseInt(dateParts[0]);
        let monthInput=parseInt(dateParts[1])-1;
        let dayInput=parseInt(dateParts[2]);
        let userDate=new Date(yearInput,monthInput,dayInput);
        if(userDate.getFullYear()===yearInput && userDate.getMonth()===monthInput && userDate.getDate()===dayInput){
            console.log("Valid Date");
        }
        else{ 
            console.log("Invalid Date");    
        }   

/*Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years*/
         let dob="2000-05-15";
         let birthDate=new Date(dob);
         let ageInYears = date.getFullYear() - birthDate.getFullYear();
         console.log(ageInYears);