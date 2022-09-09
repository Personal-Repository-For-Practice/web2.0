import React from 'react'
import BrunelLogo from '../Images/brunelLogo.jpg'
import kingsburyLogo from '../Images/kingsburyHigh.jpg'

function about_Education() {
  return (
    <>
        <table className='Education-Table'>
            <tr>
                <td><img className='Education-Logo' src={BrunelLogo} alt=''/></td>
                <td><b>Brunel University London</b></td>
                <td><b>BSc Computer Science</b></td>
                <td><b>Grades</b></td>
            </tr>

            <tr>
            <td/>
            <td><i>Year 2 Module Grades</i></td>
            <td>
                <ul className='ul'>
                    <li>Algorithms and their Applications</li>
                    <li>Level 2 Group Project</li>
                    <li>Networks and Operating Systems</li>
                    <li>Usability Engineering</li>
                    <li>Software Development and Management</li>
                </ul>
            </td>
            <td>
                <ul className='ul-alt'>
                    <li className='hide'>#</li>
                    <li>B</li>
                    <li>B+</li>
                    <li className='hide'>#</li>
                    <li>C+</li>
                </ul>
            </td>
            </tr>

            <tr>
            <td/>
                <td><i>Year 1 Module Grades</i></td>
                <td>
                    <ul className='ul'>
                        <li>Software Design</li>
                        <li>Year 1 Group Project</li>
                        <li>Fundamental Programming</li>
                        <li>Logic and Computation</li>
                        <li>Software Implementation</li>
                        <li>Information Systems and Organisations</li>
                        <li>Data and Information</li>
                    </ul>
                </td>
                <td>
                    <ul className='ul-alt'>
                        <li>A+</li>
                        <li>A</li>
                        <li>A-</li>
                        <li>B+</li>
                        <li>B</li>
                        <li>B-</li>
                        <li>C</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td><img className='Education-Logo' src={kingsburyLogo} alt=''/></td>
                <td><b>Kingsbury High School</b></td>
                <td><b>A-Level</b></td>
                <td><b>Grades</b></td>
            </tr>

            <tr>
                <td/>
                <td/>
                <td>
                    <ul className='ul'>
                        <li>Computer Science</li>
                        <li>Business</li>
                        <li>Law</li>
                    </ul>
                </td>
                <td>
                    <ul className='ul-alt'>
                        <li>B</li>
                        <li>C</li>
                        <li>E</li>
                    </ul>
                </td>
            </tr>

            <tr>
            <td><img className='Education-Logo' src={kingsburyLogo} alt=''/></td>
            <td><b>Kingsbury High School</b></td>
            <td><b>GCSE</b></td>
            <td><b>Grades</b></td>
            </tr>

            <tr>
                <td/>
                <td/>
                <td>
                <ul className='ul'>
                    <b>9 GCSEs Including</b>
                    <li>Computer Science</li>
                    <li>Science Core</li>
                    <li>Science Additional</li>
                    <li>English Language</li>
                    <li>English Literature</li>
                    <li>Mathamatics</li>
                </ul>
                </td>
                <td>
                <ul className='ul-alt'>
                    <li className='hide'>#</li>
                    <li>B</li>
                    <li>B</li>
                    <li>B</li>
                    <li>6</li>
                    <li>5</li>
                    <li>5</li>
                </ul>
                </td>
            </tr>
        </table>
    </>
  )
}

export default about_Education