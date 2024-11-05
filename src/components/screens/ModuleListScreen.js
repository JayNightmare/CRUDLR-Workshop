import React, { useState, useEffect } from "react";
import { StatusBar, LogBox } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Screen from "../layout/Screen"; 
import ModuleList from "../entity/modules/ModuleList.js";
import { ButtonTray, Button  } from "../UI/Button.js";
import Icons from "../UI/Icons.js";
import API from "../API/API.js";

const ModuleListScreen = () => {
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

    const modulesEndpoint = 'https://softwarehub.uk/unibase/api/modules'

    const navigation = useNavigation();
    const [modules, setModules] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const loadMoudles = async (endpoint) => {
        const response = await API.get(endpoint);
        setIsLoading(false);
        if (response.isSuccess) setModules(response.result);
    }

    useEffect(() => { loadMoudles(modulesEndpoint); }, []);

    const handleDelete = (module) => { 
        setModules(modules.filter((item) => item.ModuleID !== module.ModuleID)); 
    };

    const onDelete = (module) => {
        handleDelete(module);
        navigation.navigate('ModuleListScreen');
    };

    const handleAdd = (module) => setModules([...modules, module]);

    const handleModify = (updatedModule) => setModules( modules.map((module) => (module.ModuleID === updatedModule.ModuleID) ?  updatedModule : module));

    const onAdd = (module) => {
        handleAdd(module);
        navigation.navigate('ModuleListScreen');
    };

    const onModify = (module) => {
        handleModify(module);
        navigation.navigate('ModuleListScreen');
    };

    const gotoViewScreen = (module) => navigation.navigate('ModuleViewScreen', { module, onDelete, onModify });

    const gotoAddScreen = () => { navigation.navigate('ModuleAddScreen', { onAdd }); };  

    return ( 
        <Screen>
            <StatusBar barStyle="light-content" />
            <ButtonTray>
                <Button styleButton={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, borderBottomWidth: 1, borderWidth: 0 }} icon={<Icons.Add size={20}/>} label="Add" onPress={gotoAddScreen} />
            </ButtonTray>
            <ModuleList modules={modules} onSelect={gotoViewScreen} isLoading={isLoading} />
        </Screen>
    );
};

export default ModuleListScreen; 