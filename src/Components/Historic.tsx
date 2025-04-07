import React, { ReactElement } from "react";

const Historic = ({disp}:{disp:string}):ReactElement =>{
    return (<div id="historic" style={{display:disp}}>
        <h3>Historiques des Tests</h3>
        <table id="historic-table">
            <thead>
                <tr>
                    <th>Libellé</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Test_Elec 1</td>
                    <td>12/10/2023</td>
                </tr>
                <tr>
                    <td>Test_Elec 2</td>
                    <td>13/10/2023</td>
                </tr>
            </tbody>
        </table>
    </div>)
}

export default Historic;