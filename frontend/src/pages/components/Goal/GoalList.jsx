import {useState} from 'react';
import {useCallback} from 'react';

import * as L from "../EditGoal/GoalEditCheckListStyle";

export var goalsExport = ['80kg 5x5','90kg 6x5'];
export var wnameExport = '운동이름입니다.';

function GoalList (){
    const [goal,setGoal] = useState("");
    
    const onChange = (e) =>{
        setGoal(e.target.value)
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        
        if (goal === ""){
            return
        }
        else if (goal.length > 13){
            setIsFull(true);
            return
        }
        else if (goal.length <= 13){
            setIsFull(false);
        }
        setGoals((currentArray) => [goal, ...currentArray])
        setGoal("");
        // goalsExport = goals;
        // wnameExport = wname;
    }

    // const goalDone = goals.filter(goal => goal.isDone === true);

    
    const onDelete = (id) =>{
        setGoals(goals => goals.filter(goals=>goals.id !== id));
        setGoal("");
    }


    const [isFull, setIsFull] = useState("");
    const [goals, setGoals] = useState([]);
    console.log(goals);
    return (
        <div style={{display : 'flex',
        flexDirection : 'column'
        }}>
            <form>
                <input 
                style={{
                    border : '0px',
                    width : '35vh',
                    height : '4vh',
                    backgroundColor : '#D9D9D9'
                }}
                type="text" 
                placeholder="목표를 입력하세요." 
                value={goal} 
                onChange = {onChange}/>
            </form>
            <form>

                <ul style={{
                    display : 'flex',
                    padding : '0',
                    gap : '2vh',
                    flexDirection : 'column'}}>
                        
                    {goals.map((item,index)=>
                    <li style = {{
                        listStyleType : 'none',
                        display : 'flex',
                        justifyContent : 'space-between',
                        width : '100%',
                        gap : '5vh',
                        alignItems : 'center',
                        background : '#D9D9D9', 
                        
                        
                    }} key = {index}>{item}
                        <button style={{
                            background : '#D9D9D9', 
                            border : '0px',
                            display : 'flex',
                            width : '20%',
                            height : '4vh',
                            textAlign : 'center',
                            alignItems : 'center',
                            justifyContent : 'center',
                            border : '1px solid #000000'
                        }}
                        onSubmit={()=>onDelete(goals.id)}
                        >-
                        </button>
                    </li>)}
                        
                    
                </ul>
            </form>
            <form onSubmit={onSubmit}>
                <L.PlusButton>
                    <button style={{
                        background : 'none', 
                        border : '0px',
                        }}>+</button>
                </L.PlusButton>
            </form>
                <L.Warning style={isFull ? {display : 'flex'} : {display : 'none'}}>
                    목표가 너무 깁니다.
                </L.Warning>
        </div>
    )
}

export default GoalList;