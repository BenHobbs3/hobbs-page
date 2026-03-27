import '../Stylings/Table.css';
import BensBracket from '../BracketPdfs/BensBracket.pdf';
import DadsBracket from '../BracketPdfs/DadBracket.pdf';
import MomsBracket from '../BracketPdfs/MomsBracket.pdf';
import CocoRoxieBracket from '../BracketPdfs/CocoRoxieBracket.pdf';


const data = [
    { name: "Dad", score: 19, bracket: DadsBracket },
    { name: "Mom", score: 19, bracket: MomsBracket },
    { name: "Sam", score: 25, bracket: '' },
    { name: "Coco + Roxie", score: 25, bracket: CocoRoxieBracket },
    { name: "Ben", score: 25, bracket: BensBracket },
]

function TableComponent() {
    return (
        <div className="Table">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>View Bracket</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.score}</td>
                            <td>
                                <a 
                                    href={val.bracket} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="view-link"
                                >
                                    View
                                </a>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default TableComponent;