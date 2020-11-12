import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Paper, TextField, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

      paper: {
            marginTop: theme.spacing(4),
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'hidden',
            flexDirection: 'column',
            minHeight: 200,
            textAlign: "justify",
            //maxWidth: 950,
           // align: center,
            
         },

}));


function HouseRules() {

      const classes = useStyles();
   return (
      <>
      <h1>HouseRules</h1>
      <Paper className={classes.paper}>
      <h2>Residence Placement</h2>
      <p></p>
      
      <p> Student Housing shall be fully responsible for the allocation and placement of students in the specific and designated residences. Single room allocations shall be done by respective residence coordinators guided by the following: <ul> <li>seniority in terms of level of study and not year of registration</li> <li>participation in residence programmes</li> <li>age and medical condition</li> </ul>. Returning in-service students shall be exempted from the above rule provided they have stayed in the residence for two uninterrupted semesters before their In-service. Students who have been offered residence accommodation and who do not arrive or make payment within 3 days in accordance
with the commencement of their academic/orientation program may forfeit their accommodation. Students may, however, in writing request an extension of the reservation of their accommodation from the HOD: Student Housing. </p>
      </Paper>
      <Paper className={classes.paper}>
      <h2> Board and Lodging</h2>
      <br></br>
      <p>Residences open to registered students at 6:00 am on the day of the commencement of academic/orientation program. Residences are closed at 18:00 pm on the day following the closing date of the June holiday of CPUT, and reopen at suppertime on the day before the reopening of the University, on the understanding that special arrangements may be made with the Residence Coordinator (RC). Students who terminate their studies or who no longer attend lectures shall vacate the residences within one day of their last lecture. Students who do not write any examinations shall vacate the residences within one day of the termination of lectures. Students who are writing
their final examinations must depart no more than one day after their last examination, on the understanding that special arrangements may be made with the (RC) for a longer stay in the residence, if necessary.</p>
      </Paper>
      <Paper className={classes.paper}>
      <h2>Checking-in Procedure</h2>
      <br></br>
      <p>For a student to be permanently allocated to his/her room, the student must present to the residence member of staff a residence debit form obtained form (Residence Registration Point) at the Student Housing office. The student must complete a Personal Information Check in form, as well as sign a Residence Student undertaking Form. The 1st year and 1st time students must be issued with a package containing the Residence Policies, Rules and Regulations. Residence staff member will open the student’s room and complete the Room Inventory Form, which must be signed by the student as acknowledgement of the condition of the room and its contents.
Having concluded the above process the student can then put his/her padlock on his or her door. </p>
      </Paper>
      <Paper className={classes.paper}>
      <h2>University Property & Rooms</h2>
      <br></br>
      <p>The residences are the property of the University and shall not be damaged.No alterations shall be made to the buildings, equipment or furniture of the residences. In the event of destruction, damage, removal, or alterations of residence property, the said student shall compensate CPUT in amount of the damages. Special care shall be taken with regard to the cleanliness of rooms, bathrooms and toilets. Nothing shall be pasted, plugged or nailed to walls, cupboards or doors. Residence students are responsible for the cleanliness of their own rooms. RC’s will carry out room inspections at any time in line with the accommodation rules as stipulated in the Student Rules
and Code of Conduct. Residence students are strictly prohibited from making any alterations to or affecting any work to the electrical equipment or telephone equipment of the residences. Students’ own electrical appliances may only be used with the approval of the RC. Food will only be prepared in officially designated areas. The RM shall control access to the laundry machines with the assistance of the HC/RSA. The control system best suited for a residence must be displayed on the House Rules plugged on the Notice Board of each and every residence. It is an offence to sit on the laundry machines as that could lead malfunctioning of the machines. Any unauthorized use or use other than the purpose intended
for shall be viewed as a serious transgression. Transport for medical emergencies shall be accessed through the student assistant on duty or the RC. All residence equipment, regardless of its acquisition, shall remain the possession of the residence under the guardianship of the RC. </p>
      </Paper>
      <Paper className={classes.paper}>
      <h2>Students' Property</h2>
      <br></br>
      <p>The University or residence authorities cannot be held responsible for the damage, destruction or loss of property to a student resident. CPUT shall, however, investigate and pronounce its findings with respect to the circumstances resulting in the loss, damage or destruction of a student’s property and assist where it deems possible. Residence students’ property, especially clothes, must be properly labelled. A residence student who owns or is in possession of a firearm must hand in the firearm to the Campus Protection staff on entry and sign for it, and collect it when leaving the residences. </p>
      </Paper>
      <Paper className={classes.paper}> 
      <h2> Checking-out Procedure</h2>
      <br></br>
      <p>Residence check-out must be performed by the student in whose name the room has been allocated. Friends, relatives and roommate(s) cannot sign out for another student. Students checking out must obtain and complete the Check-out Form obtainable from their respective residence offices. The exit Inventory Form must be completed by the residence staff member. Before signing the inventory form the residence staff member must ensure that: The student has placed all rubbish and unwanted items in the dust bin; The student cleans, sweeps or mops the floor and restores the room to its condition on the check-in day; The student signs the inventory to confirm the condition of the room on the date of vacation. Failure to do so may result in the student being charged
for damage or loss of assets after the student has left the residence. In the case of a student not returning to the CPUT for further study, a Residence Deposit Claim form must be completed and signed by the student’s RC. All completed forms, as well as the Security Access Card must be submitted to the residence office. Padlocks must be removed from the doors. </p>
      </Paper>
      </>
   );
}

export default HouseRules;