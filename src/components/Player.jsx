import React from 'react';


const Player = ({ player, onDelete }) => (
          <li className="list-group-item" key={ player.get("id") }>
            { player.get("player") }
            <button onClick={ onDelete } className="btn btn-danger">x</button>
          </li>
);


export default Player;


//TODO delete?
// class Player extends Component {
//   	componentDidMount() {
//   		this.props.onLoad();
//   	}
//
// 	render () {
//
// 		const { player, onDelete } = this.props;
//
// 			return (
//           <li className="list-group-item" key={ player.get("id") }>
//             { player.get("player") }
//             <button onClick={ onDelete } className="btn btn-danger">x</button>
//           </li>
//       );
//   }
// }

//
// export default Player;
