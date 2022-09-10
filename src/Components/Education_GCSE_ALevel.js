import React from 'react'
import SchoolLogo from '../Images/kingsburyHigh.jpg'

function Education_GCSE_ALevel() {
  return (
    <div className='education-table-wrapper'>
        <table className='education-table'>
            <tr className='education-content'>
                <td><img src={SchoolLogo} alt='' className='education-logo'/></td>
                <td>Kingsbury High School Sixth Form</td>
                <td>Course</td>
                <td>2017-2019</td>
            </tr>
            <tr className='education-content'>
                <td/>
                <td>A-Level</td>
                <td>
                    <ul className='education-list-modules'>
                        <li>Computer Science</li>
                        <li>Business</li>
                        <li>Law</li>
                    </ul>
                </td>
                <td>
                    <ul className='education-list-grades'>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                    </ul>
                </td>
            </tr>

            <tr className='education-content'>
                <td><img src={SchoolLogo} alt='' className='education-logo'/></td>
                <td>Kingsbury High School</td>
                <td>Course</td>
                <td>2012-2017</td>
            </tr>
            <tr className='education-content'>
                <td/>
                <td>GCSE</td>
                <td>
                    <ul className='education-list-modules'>
                        <li>English Language</li>
                        <li>English Literiture</li>
                        <li>Science Core</li>
                        <li>Science Additional</li>
                        <li>Mathamatics</li>
                        <li>Computer Science</li>
                        <li>Geography</li>
                        <li>Art</li>
                        <li>Religious Studies</li>
                        <li>German</li>
                    </ul>
                </td>
                <td>
                    <ul className='education-list-grades'>
                        <li>6</li>
                        <li>5</li>
                        <li>B</li>
                        <li>B</li>
                        <li>5</li>
                        <li>B</li>
                        <li>B</li>
                        <li>B</li>
                        <li>B</li>
                        <li>D</li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default Education_GCSE_ALevel