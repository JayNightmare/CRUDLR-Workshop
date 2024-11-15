import React, { useState } from 'react';
import Icons from '../../UI/Icons';
import Form from '../../UI/Form';
import useLoad from '../../API/useLoad.js';

const defaultModule = {
    ModuleID: null,
    ModuleCode: null,
    ModuleName: null,
    ModuleLevel: null,
    ModuleYearID: null,
    ModuleLeaderID: null,
    ModuleImage: null
}

const ModuleForm = ({ ogModule, onSubmit, onCancel }) => {
    defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
    defaultModule.ModuleImageURL = 'https://via.placeholder.com/150x150';

    const yearsEndpoint = 'https://softwarehub.uk/unibase/api/years';
    const staffEndpoint = 'https://softwarehub.uk/unibase/api/users/staff';

    const levels = [
        { value: 3, label: '3 (Foundation)' },
        { value: 4, label: '4 (First Year)' },
        { value: 5, label: '5 (Second Year)' },
        { value: 6, label: '6 (Third Year)' },
        { value: 7, label: '7 (Masters)' },
    ];

    // const cohorts = [
    //     { value: 1, label: 'Local 2022/2023' },
    //     { value: 2, label: 'Local 2023/2024' },
    //     { value: 3, label: 'Local 2024/2025' },
    //     { value: 4, label: 'Local 2025/2026' },
    //     { value: 5, label: 'Local 2026/2027' },
    // ];

    const [module, setModule] = useState(ogModule || defaultModule);
    const [years, , isYearsLoading] = useLoad(yearsEndpoint);
    const [leaders, , isLeadersLoading] = useLoad(staffEndpoint);

    const handleChange = (field, value) => setModule({ ...module, [field]: value });
    const handleSubmit = () => {
        if (typeof onSubmit === 'function') { onSubmit(module); }
        else { console.error('onSubmit is not a function:', onSubmit); }
    };

    const submitLabel = ogModule ? 'Update Module' : 'Add Module';
    const submitIcon = ogModule ? <Icons.Edit size={15}/> : <Icons.Add size={15}/>;

    const cohorts = years.map((year) => ({ value: year.YearID, label: year.YearName }));
    const staff = leaders.map((leader) => ({ value: leader.UserID, label: `${leader.UserFirstname} ${leader.UserLastname}` }));

    return (
        <Form onSubmit={handleSubmit} onCancel={onCancel} submitLabel={submitLabel} submitIcon={submitIcon}>
            {/* <Text style={styles.title}>Edit Module</Text> */}
            <Form.InputText label="Module Code" value={module.ModuleCode} onChange={(value) => handleChange('ModuleCode', value)} />
            <Form.InputText label="Module Name" value={module.ModuleName} onChange={(value) => handleChange('ModuleName', value)} />
            <Form.InputSelect label="Module Level" prompt="Select Module Level" options={levels} value={module.ModuleLevel} onChange={(value) => handleChange('ModuleLevel', value)} />
            <Form.InputSelect label="Module Cohort" prompt="Select Module Cohort" options={cohorts} isLoading={isYearsLoading} value={module.ModuleYearID} onChange={(value) => handleChange('ModuleYearID', value)} />
            <Form.InputSelect label="Module Leader" prompt="Select Leader" options={staff} isLoading={isLeadersLoading} value={module.ModuleLeaderID} onChange={(value) => handleChange('ModuleLeaderID', value)} />
            <Form.InputText label="Module Image" value={module.ModuleImageURL} onChange={(value) => handleChange('ModuleImage', value)} />
        </Form>
    )
}

export default ModuleForm;