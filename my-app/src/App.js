import logo from './logo.svg';
import './App.css';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Cards from './components/Cards';

const teams = [{ Team_name: "Management and Logistics Team", Team_members: [{Name: "Hemant Gupta",Position: "Lead"},{Name: "Shubham Mohanty",Position: "Core Member"},{Name: "Shubham Verma",Position: "Core Member"}] },
               { Team_name: "Event and Contents Team", Team_members: [{Name: "Divij Gupta",Position: "Lead"},{Name: "Ajinkya Pandey",Position: "Core Member"},{Name: "Dasari Pranavesh Reddy",Position: "Core Member"}] },
               { Team_name: "Finance and Capital Team", Team_members: [{Name: "D Vishnu Aravind",Position: "Lead"},{Name: "Allu Sai Kowshik",Position: "Core Member"},{Name: "Shruti Dhariya",Position: "Core Member"}] },
               { Team_name: "Public Relations and Outreach Team", Team_members: [{Name: "Komminemi Sai Vignesh",Position: "Lead"},{Name: "M MAnukrishna",Position: "Core Member"},{Name: "Yuvraj",Position: "Core Member"}] },
               { Team_name: "Branding and Promotions Team", Team_members: [{Name: "Ajitesh Ghoregarekar",Position: "Lead"},{Name: "Saumya Sinha",Position: "Core Member"},{Name: "Siddhant Madhukar",Position: "Core Member"}] },
               { Team_name: "Web Operations Team", Team_members: [{Name: "Adnan Rizvi",Position: "Lead"},{Name: "Tilak Reddy",Position: "Core Member"},{Name: "Viramgama Jaimin",Position: "Core Member"}] },
               { Team_name: "Community Management Team", Team_members: [{Name: "Abhishek Anand",Position: "Core Member"},{Name: "Hemashree",Position: "Core Member"},{Name: "Anupam Tripathi",Position: "Core Member"}] }];

function App() {
  return (
    <>
    <div className="App">
          <div className="abc">  <Card3></Card3></div>
          </div>
     <div style={{display: 'block'}}> <Cards></Cards></div>
      {/* <Card2></Card2> */}

    </>
  );
}

export default App;
