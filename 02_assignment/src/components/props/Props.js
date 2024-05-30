import React from "react";
import ImageUrl from "../../utils/ImageUrl"
function Props(props) {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <section className="profile">
                <h2>{props.maria.name}</h2>
                <img
                    className="avatar"
                    src={ImageUrl("szV5sdG")}
                    alt={props.maria.name}
                    width={70}
                    height={70}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        {props.maria.profession}
                    </li>
                    <li>
                        <b>Awards: 4 </b>
                        {props.maria.awards}
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {props.maria.discovery}
                    </li>
                </ul>
            </section>
            <section className="profile">
                <h2>{props.katsuko.name}</h2>
                <img
                    className="avatar"
                    src={ImageUrl("YfeOqp2")}
                    alt={props.katsuko.name}
                    width={70}
                    height={70}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        {props.katsuko.profession}
                    </li>
                    <li>
                        <b>Awards: 2 </b>
                        {props.katsuko.awards}
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {props.katsuko.discovery}
                    </li>
                </ul>
            </section>
        </div>
    );
}
// function Props({maria,katsuko}) {
//     return (
//         <div>
//             <h1>Notable Scientists</h1>
//             <section className="profile">
//                 <h2>{maria.name}</h2>
//                 <img
//                     className="avatar"
//                     src={ImageUrl("szV5sdG")}
//                     alt={maria.name}
//                     width={70}
//                     height={70}
//                 />
//                 <ul>
//                     <li>
//                         <b>Profession: </b>
//                         {maria.profession}
//                     </li>
//                     <li>
//                         <b>Awards: 4 </b>
//                         {maria.awards}
//                     </li>
//                     <li>
//                         <b>Discovered: </b>
//                         {maria.discovery}
//                     </li>
//                 </ul>
//             </section>
//             <section className="profile">
//                 <h2>{katsuko.name}</h2>
//                 <img
//                     className="avatar"
//                     src={ImageUrl("YfeOqp2")}
//                     alt="Katsuko Saruhashi"
//                     width={70}
//                     height={70}
//                 />
//                 <ul>
//                     <li>
//                         <b>Profession: </b>
//                         {katsuko.profession}
//                     </li>
//                     <li>
//                         <b>Awards: 2 </b>
//                         {katsuko.awards}
//                     </li>
//                     <li>
//                         <b>Discovered: </b>
//                         {katsuko.discovery}
//                     </li>
//                 </ul>
//             </section>
//         </div>
//     );
// }

export default Props;
