import React, {useEffect, useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Row, message} from "antd";
import axios from 'axios';
import {StyleMonth} from './components/StyledComponents'

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function App() {
    const [data, setData] = useState(null)
    console.log(data)

    const fetchData = async () => {
        try {
            const response = await axios.get("https://yalantis-react-school-api.yalantis.com/api/task0/users")
            setData(response.data)
        } catch (e) {
            message.error(`Something went wrong: ${e.message}`, 5)
        }
    }

    useEffect(()=> {
        fetchData()
    }, [])

    const getColor = (countOfUsers) =>{
        if(countOfUsers <= 2){
            return "#A0A0A0"
        } else if (countOfUsers <=6){
            return "#3700f9"
        } else if (countOfUsers <= 10){
            return "#01d000"
        } else {
            return "#fe0000"
        }
    }

    return (
        <Row justify="space-around">
            {
                monthNames.map((elem, index) => {
                    const users = data ? data.filter(({dob}) => new Date(dob).getMonth() === index) : []
                    console.log("users:", users)
                    return (
                        <StyleMonth
                            key={elem}
                            monthColor={getColor(users.length)}
                            trigger="hover"
                            placement="right"
                            content={
                                users.map(({firstName, lastName, id}) => (
                                    <div key={id}>{firstName + " " + lastName}</div>
                                ))
                            }
                        >
                            <h2>{elem}</h2>
                        </StyleMonth>
                    )
                })
            }
        </Row>
    );
}

export default App;
