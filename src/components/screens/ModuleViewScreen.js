import React from 'react';
import { StatusBar } from 'react-native';
import Screen from '../layout/Screen';
import ModuleView from '../entity/modules/ModuleView';

const ModuleViewScreen = ({ route, navigation }) => {
    const { module, onDelete, onModify } = route.params;

    const placeHolderText = `
Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis euismod rutrum sodales maximus donec sit imperdiet. Dignissim eleifend suscipit odio, phasellus aenean felis. Eu phasellus class consequat sit curae mus mollis. Faucibus turpis vestibulum aenean nec nullam, facilisis pharetra est. Ad senectus quam sem et purus enim, suspendisse a condimentum.

Himenaeos tincidunt porta molestie sem curae netus. Potenti sociosqu porta ultricies phasellus pharetra justo. Cursus magna dis quis a sagittis. Commodo fermentum sed accumsan duis tincidunt curabitur maecenas. Litora congue porttitor; fusce mollis purus per auctor? Scelerisque sem nisi non mus facilisi sagittis mus. Ac nisi integer nam in est orci porta. Primis fusce eget posuere sem fringilla ac vel diam. Curae consectetur class sollicitudin maximus leo tortor sagittis nulla elementum.

Torquent varius pharetra metus augue dictumst velit lobortis ante. Ridiculus sagittis habitant parturient eu enim praesent ut sodales. Sociosqu dignissim odio hendrerit himenaeos hac elit dolor varius. Egestas et aliquam semper tempus egestas imperdiet. Interdum felis metus metus dictumst malesuada felis suscipit. Convallis gravida nam congue sagittis dignissim ante cubilia. Natoque tempus donec sociosqu sodales purus aenean nostra. Fermentum maecenas aliquet; eleifend bibendum nec nulla tempor.

Nostra eu magna sed massa class tortor a. Primis adipiscing interdum rutrum aliquet fringilla. Pulvinar tortor nibh; integer nunc montes orci. Vel ac convallis massa litora turpis nullam eget augue massa. Porta hendrerit ante dui habitant torquent libero duis. Hac litora felis nulla auctor primis. Ipsum vulputate nibh commodo fames himenaeos per amet. Litora tellus convallis lectus sodales luctus.

Amet sit ridiculus sociosqu nibh, mollis et porttitor. Cursus quam eu mollis arcu vel. Netus tempus sagittis euismod vestibulum nunc sociosqu. Id netus id leo; fringilla quam rutrum. Vehicula eros sem; dapibus ridiculus dis curae fusce luctus. Faucibus lacus feugiat consectetur molestie adipiscing cursus libero commodo nostra. Ut rutrum inceptos est facilisis metus penatibus habitant fames. Eget sit adipiscing molestie turpis nam fames est.
    `;

    const gotoModifyScreen = () => navigation.navigate('ModuleModifyScreen', { module, onModify });

    return (
        <Screen>
            <StatusBar barStyle="light-content" />
            <ModuleView
                key={module.ModuleCode}
                module={module}
                onDelete={onDelete}
                onModify={gotoModifyScreen}
                placeHolderText={placeHolderText}>
            </ModuleView>
        </Screen>
    )
};

export default ModuleViewScreen;