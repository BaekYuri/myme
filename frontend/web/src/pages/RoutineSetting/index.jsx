import React, { useState } from 'react';

import RoutineItem from '../../components/Routine/RoutineItem/index'
import AddRoutineButton from '../../components/Routine/AddRoutineButton/index'
import RoutineModal from '../../components/Routine/RoutineModal/index';
import CreateRoutineModal from '../../components/Routine/CreateRoutineModal/index';
import Layout from '../../layout';

import Wrapper from './styles';
function App(){
    let [routineModal, setRoutineModal] = useState(false);
    let [createRoutineModal, setCreateRoutineModal] = useState(false);
    function openRoutineModal(){
        setRoutineModal(true);
    }
    function openCreateRoutineModal(){
        setCreateRoutineModal(true);
    }
    return(
        <Wrapper>
            <Layout>
                <div className='menu daily-menu'><h1>Daily</h1><AddRoutineButton onClick={openCreateRoutineModal}></AddRoutineButton></div>
                <hr/>
                <RoutineItem routineId='아침 루틴' openModal={openRoutineModal}></RoutineItem>
                <RoutineItem routineId='저녁 루틴' openModal={openRoutineModal}></RoutineItem>
                <RoutineModal routineModal={routineModal} setRoutineModal={setRoutineModal}></RoutineModal>
                <CreateRoutineModal createRoutineModal={createRoutineModal} setCreateRoutineModal={setCreateRoutineModal}></CreateRoutineModal>
            </Layout>
        </Wrapper>
    );
}
export default App;