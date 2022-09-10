import React from 'react'
import BrunelLogo from'../Images/brunelLogo.jpg'

function Education_University() {
  return (
    <div className='education-table-wrapper'>
        <table className='education-table'>
            <tr className='education-content'>
                <td><img src={BrunelLogo} alt='' className='education-logo'/></td>
                <td>Brunel University</td>
                <td>BSc Computer Science</td>
                <td>2020 - 2023</td>
            </tr>
            <tr className='education-content'>
                <td/>
                <td>Year 1</td>
                <td>
                    <ul className='education-list-modules'>
                        <li>Year 1 Group Project</li>
                        <li>Data and Information</li>
                        <li>Software Design</li>
                        <li>Software Implementation</li>
                        <li>Fundamental Programming</li>
                        <li>Information Systems and Organisations</li>
                        <li>Logic and Computation</li>
                    </ul>
                </td>
                <td>
                <ul className='education-list-grades'>
                    <li>A</li>
                    <li>C</li>
                    <li>A+</li>
                    <li>B</li>
                    <li>A-</li>
                    <li>B-</li>
                    <li>B+</li>
                </ul>
                </td>
            </tr>

            <tr className='education-content'>
                <td/>
                <td>Year 2</td>
                <td>
                    <ul className='education-list-modules'>
                        <li>Year 2 Group Project</li>
                        <li>Software Development and Management </li>
                        <li>Algorithms and their Applications </li>
                        <li>Networks and Operating Systems </li>
                    </ul>
                </td>
                <td>
                <ul className='education-list-grades'>
                    <li>B</li>
                    <li>C+</li>
                    <li>B+</li>
                    <li>B+</li>
                </ul>
                </td>
            </tr>
            <tr className='education-content'>
                <td><img src={BrunelLogo} alt='' className='education-logo'/></td>
                <td>Brunel University</td>
                <td>BA Game Design</td>
                <td>2019 - 2020</td>
            </tr>
        </table>
    </div>
  )
}

export default Education_University