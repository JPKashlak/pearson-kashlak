import React from 'react';

const Theatre = () => {

  const stageCredits = [
    // {
    //   title: "Gloria",
    //   role: "Stage Manager",
    //   company: "Street Corner Arts (2020)",
    //   director: "Jeremy Cudd"
    // },
    {
      title: "House",
      role: "Stage Manager",
      company: "Hyde Park Theatre (2020)",
      director: "Ken Webster"
    },
    {
      title: "It Is Magic",
      role: "Stage Manager",
      company: "Capital T Theatre (2019)",
      director: "Mark Pickell"
    },
    {
      title: "Hot Dogs At The Eiffel Tower",
      role: "Stage Manager",
      company: "Hyde Park Theatre (2019)",
      director: "Ken Webster"
    },
    {
      title: "Robert Mueller's Greatest Hits",
      role: "Stage Manager",
      company: "Capital T Theatre (2019)",
      director: "Mark Pickell"
    },
    {
      title: "Cul-De-Sac",
      role: "Stage Manager",
      company: "Summer Break Theatre (2019)",
      director: "Mark Pickell"
    },
    {
      title: "End of Shift",
      role: "Stage Manager",
      company: "Hyde Park Theatre (2019)",
      director: "Alexandra Shaw"
    },
    {
      title: "Death Tax",
      role: "Stage Manager",
      company: "Hyde Park Theatre (2019)",
      director: "Ken Webster"
    },
    {
      title: "A Doll's House Part II",
      role: "Stage Manager",
      company: "Hyde Park Theatre (2019)",
      director: "Ken Webster"
    },
    {
      title: "The Hunchback Variations & Faust",
      role: "Running Crew",
      company: "Capital T Theatre (2018)",
      director: "Mark Pickell"
    },
    {
      title: "Confessions of a Mexpatriate",
      role: "Stage Manager",
      company: "Hyde Park Theatre (2018)",
      director: "Ken Webster"
    },
    {
      title: "The Goat, or Who Is Sylvia",
      role: "Stage Manager",
      company: "Capital T Theatre (2018)",
      director: "Mark Pickell"
    },
    {
      title: "The Antipodes",
      role: "Stage Manager",
      company: "Hyde Park Theatre (2018)",
      director: "Ken Webster"
    },
    {
      title: "Small Mouth Sound",
      role: "House Manager",
      company: "Capital T Theatre (2018)",
      director: "Mark Pickell"
    },
    {
      title: "I And You",
      role: "Running Crew",
      company: "Capital T Theatre (2018)",
      director: "Simone Alexander"
    },
    {
      title: "Wakey, Wakey",
      role: "Stage Manager",
      company: "Hyde Park Theatre (2018)",
      director: "Ken Webster"
    },
    {
      title: "The Wolves",
      role: "Stahe Manager",
      company: "Hyde Park Theatre (2017)",
      director: "Ken Webster"
    },
    {
      title: "The Moors",
      role: "Stage Manager",
      company: "Hyde Park Theatre (2017)",
      director: "Ken Webster"
    },
    {
      title: "John",
      role: "Stage Manager / Assistant Director",
      company: "Hyde Park Theatre (2017)",
      director: "Ken Webster"
    },
    {
      title: "Frontera Fext '17",
      role: "Assistant Stage Manager",
      company: "Hyde Park Theatre (2017)",
      director: "Christie Moore"
    },
    {
      title: "Hir",
      role: "Running Crew",
      company: "Capital T Theatre",
      director: "Delanté Keys"
    },
    {
      title: "A Tuna Christmas",
      role: "Light/Sound Board Operator",
      company: "Sam Bass Theatre (2016)",
      director: "Robyn Conner"
    },
    {
      title: "Song About Himself",
      role: "Assistant Director",
      company: "Capital T Theatre (2016)",
      director: "Mark Pickell"
    },
    {
      title: "Heaven Or Not",
      role: "Sound Board Operator",
      company: "Vortex Reparatory Co. (2015)",
      director: "Toni Bravo"
    },
    {
      title: "Plaid Tidings",
      role: "Spotlight",
      company: "Bucks County Playhouse (2014)",
      director: "Gordon Greenberg"
    }
  ] 

  return (
    <div className ="neonBase">
      <h1>Theatre</h1>
        <table>
          <tr>
            <th>Production</th>
            <th>Role</th>
            <th>Company</th>
            <th>Director</th>
          </tr>
          {stageCredits.map(credit => (
            <tr>
              <td><i>{credit.title}</i></td>
              <td>{credit.role}</td>
              <td>{credit.company}</td>
              <td>{credit.director}</td>
            </tr>
          ))}
        </table>
    </div>
  );
};

export default Theatre;