import React, { useState } from 'react';
import { Form, FormControl, Button, Row, Col, Card } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FilterSection = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [applicationName, setApplicationName] = useState('');
  const [errorCode, setErrorCode] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleFilter = (e) => {
    e.preventDefault();
    onFilter({ searchTerm, applicationName, errorCode, startDate, endDate });
  };

  return (
    <div style={{width:'94%', margin:'20px auto'}}>
        <Button variant='secondary' style={{background:'#00133D'}}>Filter</Button>
    </div>
  );
};

export default FilterSection;