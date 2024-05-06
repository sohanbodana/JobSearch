import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";
import Navbar from './navbar/Navbar';
import SliderHome from './Slider';
import Footer from './footer/Footer';
import SearchBar from './shop/SearchBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import imageStyle from './javasc.js';

const Home = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedEmployees, setSelectedEmployees] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleEmployeesChange = (event) => {
    setSelectedEmployees(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setSelectedExperience(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSelectedSalary(event.target.value);
  };

  const handleCheckout = async () => {
    const { isConfirmed } = await Swal.fire({
      icon: "success",
      title: "Your job application has been successfully submitted!",
      showCancelButton: true,
      confirmButtonText: 'Continue',
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://api.weekday.technology/adhoc/getSampleJdJSON',
          {
            limit: 10,
            offset: 0
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        setProducts(response.data.jdList);
        console.log(response.data.jdList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const clickButton = (product) => {
    navigate(`/details`, { state: { selectedProduct: product } });
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (searchQuery === '' || product.companyName.toLowerCase().includes(searchQuery.toLowerCase()) || product.jobRole.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCategory === '' || product.jobRole.toLowerCase() === selectedCategory.toLowerCase()) &&
      (selectedEmployees === '' || product.employees.toLowerCase() === selectedEmployees.toLowerCase()) &&
      (selectedExperience === '' || product.minExp >= parseInt(selectedExperience)) && 
      (selectedLocation === '' || product.location.toLowerCase() === selectedLocation.toLowerCase()) &&
      (selectedSalary === '' || (product.minJdSalary >= parseInt(selectedSalary) ))
    );
  });
  


  return (
    <>
      <Navbar />
      <div>
        <div className="search-bar">
          <div className="Aa">
            <center>
              <div className="d-flex justify-content-center align-items-center text-center self">
                <Link className="nav-link self2" exact={true} to="/">
                  <strong>All Jobs</strong>
                </Link>

                <select className="selected" value={selectedCategory} onChange={handleCategoryChange}>
                  <option value="" disabled>Roles</option>
                  <option value="Backend">Backend</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Fullstack">Fullstack</option>
                  <option value="IOS">IOS</option>
                  <option value="Android">Android</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Machine Learning Engineer">Machine Learning Engineer</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="QA Engineer">QA Engineer</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="Business Analyst">Business Analyst</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Customer Support">Customer Support</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Finance">Finance</option>
                  <option value="Operations">Operations</option>
                  <option value="Content Creator">Content Creator</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                  <option value="Remote">Remote</option>
                  <option value="Freelance">Freelance</option>
                </select>

                <select className="selected" value={selectedEmployees} onChange={handleEmployeesChange}>
                  <option value="" disabled>Number Of Employees</option>
                  {/* <option value="1-10">1-10</option>
                  <option value="11-20">11-20</option>
                  <option value="21-50">21-50</option>
                  <option value="51-100">51-100</option>
                  <option value="101-200">101-200</option>
                  <option value="201-500">201-500</option>
                  <option value="1000+">1000+</option> */}
                </select>

                <select className="selected" value={selectedExperience} onChange={handleExperienceChange}>
                  <option value="" disabled>Experience</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>

                <select className="selected" value={selectedLocation} onChange={handleLocationChange}>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="In-office">In-office</option>
                </select>

                <select className="selected" value={selectedSalary} onChange={handleSalaryChange}>
                  <option value="" disabled>Minimum Base Pay Salary</option>
                  <option value="0">0L</option>
                  <option value="3">10L</option>
                  <option value="26">20L</option>
                  <option value="35">30L</option>
                  <option value="35">40L</option>
                  <option value="64">50L</option>
                  <option value="61">60L</option>
                </select>

              </div>
            </center>
          </div>
          <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
          <section className="home">
            <div className="container d_flex">
              <SliderHome />
            </div>
          </section>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && (
          <div className="product-list Aa">
            {filteredProducts.map((product) => (
              <div key={product.jdUid} className="product-card">
                <img src={product.logoUrl} alt={product.companyName} style={imageStyle} onClick={() => clickButton(product)} />
                <h3>{product.companyName}</h3>
                <p>{product.jobRole}</p>
                <p>${product.minJdSalary} - ${product.maxJdSalary}</p>
                <p>Location: {product.location}</p>
                <p>MinExperience: {product.minExp}</p>
                <p></p>
                <button onClick={() => clickButton(product)} className="btn btn-primary m-2">
                  View Job
                </button>
                <button className="btn btn-green btt" onClick={handleCheckout}>
                  🔥Easy Apply
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
