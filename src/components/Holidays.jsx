import React from 'react'
import { Link } from 'react-router-dom'

const Holidays = () => {
    return (
        <>
            <div className="container">

                {/* Top Row: Predefined Timers + Recently Used */}
                <div className="row Home_Main">
                    {/* Left: Timer Links */}
                    <div className="col-md-6 col-sm-6 bg-traslate p-3 mb-3 bg-traslate border">
                        <div className="row">
                            <h4 className='H_Fonts text-center'>Holidays in Bharat</h4>
                            <p className='Row_Bottom bg-traslate border'></p>
                            <div className="col-md-9 col-sm-6">
                                <p>New Year's Day</p>
                                <p>Hazarat Ali's Birthday</p>
                                <p>Pongal</p>
                                <p>Makar Sankranti</p>
                                <p>Vasant Panchami</p>
                                <p>Republic Day</p>
                                <p>Guru Ravidas Jayanti</p>
                                <p>Maharishi Dayanand Saraswati Jayanti</p>
                                <p>Valentine's Day</p>
                                <p>Maha Shivaratri/Shivaratri</p>
                                <p>Lunar New Year</p>
                                <p>Ramadan Start (Tentative Date)</p>
                                <p>Shivaji Jayanti</p>
                                <p>Holika Dahana</p>
                                <p>Holi</p>
                                <p>Ugadi</p>
                                <p>Gudi Padwa</p>
                                <p>Jamat Ul-Vida</p>
                                <p>March Equinox</p>
                                <p>Ramzan Id (Tentative Date)</p>
                                <p>Rama Navami</p>
                                <p>Mahavir Jayanti</p>
                                <p>First day of Passover</p>
                                <p>Maundy Thursday</p>
                                <p>Good Friday</p>
                                <p>Easter Day</p>
                                <p>Vaisakhi</p>
                                <p>Mesadi</p>
                                <p>Ambedkar Jayanti</p>
                                <p>Bahag Bihu/Vaisakhadi</p>
                                <p>Birthday of Rabindranath</p>
                                <p>Mother’s Day</p>
                                <p>Bakrid (Tentative Date)</p>
                                <p>Father’s Day</p>
                                <p>June Solstice</p>
                                <p>Muharram/Ashura (Tentative Date)</p>
                                <p>Rath Yatra</p>
                                <p>Friendship Day</p>
                                <p>Independence Day</p>
                                <p>Milad un-Nabi (Tentative Date)</p>
                                <p>Onam</p>
                                <p>Raksha Bandhan (Rakhi)</p>
                                <p>Janmashtami</p>
                                <p>Janmashtami (Smarta)</p>
                                <p>Ganesh Chaturthi/Vinayaka Chaturthi</p>
                                <p>September Equinox</p>
                                <p>Mahatma Gandhi Jayanti</p>
                                <p>First Day of Sharad Navratri</p>
                                <p>First Day of Durga Puja Festivities</p>
                                <p>Maha Saptami</p>
                                <p>Maha Ashtami</p>
                                <p>Dussehra</p>
                                <p>Maharishi Valmiki Jayanti</p>
                                <p>Karaka Chaturthi (Karva Chauth)</p>
                                <p>Halloween</p>
                                <p>Naraka Chaturdasi</p>
                                <p>Diwali/Deepavali</p>
                                <p>Govardhan Puja</p>
                                <p>Bhai Duj</p>
                                <p>Chhat Puja (Pratihar Sashthi/Surya Sashthi)</p>
                                <p>Guru Nanak Jayanti</p>
                                <p>Guru Tegh Bahadur's Martyrdom Day</p>
                                <p>First Day of Hanukkah</p>
                                <p>Last day of Hanukkah</p>
                                <p>December Solstice</p>
                                <p>Hazarat Ali's Birthday</p>
                                <p>Christmas Eve</p>
                                <p>Christmas</p>
                                <p>New Year's Eve</p>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <p>Jan 1, 2026</p>
                                <p>Jan 3, 2026</p>
                                <p>Jan 14, 2026</p>
                                <p>Jan 14, 2026</p>
                                <p>Jan 23, 2026</p>
                                <p>Jan 26, 2026</p>
                                <p>Feb 1, 2026</p>
                                <p>Feb 12, 2026</p>
                                <p>Feb 14, 2026</p>
                                <p>Feb 15, 2026</p>
                                <p>Feb 17, 2026</p>
                                <p>Feb 19, 2026</p>
                                <p>Feb 19, 2026</p>
                                <p>Mar 3, 2026</p>
                                <p>Mar 4, 2026</p>
                                <p>Mar 19, 2026</p>
                                <p>Mar 19, 2026</p>
                                <p>Mar 20, 2026</p>
                                <p>Mar 20, 2026</p>
                                <p>Mar 21, 2026</p>
                                <p>Mar 26, 2026</p>
                                <p>Mar 31, 2026</p>
                                <p>Apr 2, 2026</p>
                                <p>Apr 2, 2026</p>
                                <p>Apr 3, 2026</p>
                                <p>Apr 5, 2026</p>
                                <p>Apr 14, 2026</p>
                                <p>Apr 14, 2026</p>
                                <p>Apr 14, 2026</p>
                                <p>Apr 15, 2026</p>
                                <p>May 1, 2026</p>
                                <p>May 1, 2026</p>
                                <p>May 9, 2026</p>
                                <p>May 10, 2026</p>
                                <p>May 27, 2026</p>
                                <p>Jun 21, 2026</p>
                                <p>Jun 21, 2026</p>
                                <p>Jun 26, 2026</p>
                                <p>Jul 16, 2026</p>
                                <p>Aug 2, 2026</p>
                                <p>Aug 15, 2026</p>
                                <p>Aug 26, 2026</p>
                                <p>Aug 26, 2026</p>
                                <p>Aug 28, 2026</p>
                                <p>Sep 4, 2026</p>
                                <p>Sep 4, 2026</p>
                                <p>Sep 14, 2026</p>
                                <p>Sep 23, 2026</p>
                                <p>Oct 2, 2026</p>
                                <p>Oct 11, 2026</p>
                                <p>Oct 17, 2026</p>
                                <p>Oct 18, 2026</p>
                                <p>Oct 19, 2026</p>
                                <p>Oct 20, 2026</p>
                                <p>Oct 26, 2026</p>
                                <p>Oct 29, 2026</p>
                                <p>Oct 31, 2026</p>
                                <p>Nov 8, 2026</p>
                                <p>Nov 8, 2026</p>
                                <p>Nov 9, 2026</p>
                                <p>Nov 11, 2026</p>
                                <p>Nov 15, 2026</p>
                                <p>Nov 24, 2026</p>
                                <p>Nov 24, 2026</p>
                                <p>Dec 5, 2026</p>
                                <p>Dec 12, 2026</p>
                                <p>Dec 22, 2026</p>
                                <p>Dec 23, 2026</p>
                                <p>Dec 24, 2026</p>
                                <p>Dec 25, 2026</p>
                                <p>Dec 31, 2026</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 bg-traslate p-3 mb-3 bg-traslate border">
                        <div className="row">
                            <h4 className='H_Fonts text-center'>Holidays in the United States</h4>
                            <p className='Row_Bottom bg-traslate border'></p>
                            <div className="col-md-9">
                                <p>New Year</p>
                                <p>Martin Luther King Day</p>
                                <p>Groundhog Day</p>
                                <p>Chinese New Year</p>
                                <p>Valentine's Day</p>
                                <p>Presidents Day</p>
                                <p>St. Patrick's Day</p>
                                <p>April Fool's Day</p>
                                <p>Good Friday</p>
                                <p>Easter</p>
                                <p>Easter Monday</p>
                                <p>Tax Day</p>
                                <p>Mother's Day</p>
                                <p>Memorial Day</p>
                                <p>Father's Day</p>
                                <p>Juneteenth</p>
                                <p>Independence Day</p>
                                <p>Labor Day</p>
                                <p>Programmers' Day</p>
                                <p>Columbus Day</p>
                                <p>Halloween</p>
                                <p>Day of the Dead</p>
                                <p>Veterans Day</p>
                                <p>Thanksgiving Day</p>
                                <p>Black Friday</p>
                                <p>Cyber Monday</p>
                                <p>Christmas</p>
                            </div>
                            <div className="col-md-3">
                                <p>Jan 1, 2026</p>
                                <p>Jan 19, 2026</p>
                                <p>Feb 2, 2026</p>
                                <p>Feb 17, 2026</p>
                                <p>Feb 14, 2026</p>
                                <p>Feb 16, 2026</p>
                                <p>Mar 17, 2026</p>
                                <p>Apr 1, 2026</p>
                                <p>Apr 3, 2026</p>
                                <p>Apr 5, 2026</p>
                                <p>Apr 6, 2026</p>
                                <p>Apr 15, 2026</p>
                                <p>May 10, 2026</p>
                                <p>May 25, 2026</p>
                                <p>Jun 21, 2026</p>
                                <p>Jun 19, 2026</p>
                                <p>Jul 4, 2026</p>
                                <p>Sep 1, 2026</p>
                                <p>Sep 13, 2026</p>
                                <p>Oct 13, 2026</p>
                                <p>Oct 31, 2026</p>
                                <p>Nov 2, 2026</p>
                                <p>Nov 11, 2026</p>
                                <p>Nov 27, 2026</p>
                                <p>Nov 28, 2026</p>
                                <p>Dec 1, 2026</p>
                                <p>Dec 25, 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="row Home_Main text-start mb-5 py-3">
                    {/* Left: Timer Links */}
                    <div className="col-md-6 bg-traslate p-3  bg-traslate border">
                        <div className="row">
                            <h4 className='H_Fonts p-2 text-center'>Holidays in Australia</h4>
                            <p className='Row_Bottom bg-traslate border'></p>
                            <div className="col-md-9">
                                <p>New Year</p>
                                <p>Epiphany</p>
                                <p>Australia Day</p>
                                <p>Chinese New Year</p>
                                <p>Valentine's Day</p>
                                <p>St. Patrick's Day</p>
                                <p>Harmony Day</p>
                                <p>Good Friday</p>
                                <p>Easter</p>
                                <p>Easter Monday</p>
                                <p>Anzac Day</p>
                                <p>Mother's Day</p>
                                <p>Father's Day in Australia</p>
                                <p>Halloween</p>
                                <p>Remembrance Day</p>
                                <p>Christmas</p>
                                <p>Boxing Day</p>
                            </div>
                            <div className="col-md-3">
                                <p>Jan 1, 2026	</p>
                                <p>Jan 6, 2026</p>
                                <p>Jan 26, 2026</p>
                                <p>Feb 17, 2026</p>
                                <p>Feb 14, 2026</p>
                                <p>Mar 17, 2026</p>
                                <p>Mar 21, 2026</p>
                                <p>Apr 3, 2026</p>
                                <p>Apr 5, 2026</p>
                                <p>Apr 6, 2026</p>
                                <p>Apr 25, 2026</p>
                                <p>May 10, 2026</p>
                                <p>Sep 7, 2026</p>
                                <p>Oct 31, 2026</p>
                                <p>Nov 11, 2026</p>
                                <p>Dec 25, 2026</p>
                                <p>Dec 26, 2026</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Recently Used */}
                    <div className="col-md-6 bg-traslate p-3 bg-traslate border">
                        <h4 className="H_Fonts p-2 text-center">Holidays in Canada</h4>
                        <p className='Row_Bottom bg-traslate border'></p>
                        <div className='row'>
                            <div className="col-md-9">
                                <p>New Year</p>
                                <p>Epiphany</p>
                                <p>Groundhog Day</p>
                                <p>Chinese New Year</p>
                                <p>Valentine's Day</p>
                                <p>St. Patrick's Day</p>
                                <p>Good Friday</p>
                                <p>Easter</p>
                                <p>Easter Monday</p>
                                <p>Mother's Day</p>
                                <p>Victoria Day</p>
                                <p>Father's Day</p>
                                <p>Canada Day</p>
                                <p>Labor Day</p>
                                <p>Thanksgiving Day in Canada</p>
                                <p>Halloween</p>
                                <p>Remembrance Day</p>
                                <p>Christmas</p>
                                <p>Boxing Day</p>
                            </div>
                            <div className="col-md-3">
                                <p>Jan 1, 2026</p>
                                <p>Jan 6, 2026</p>
                                <p>Feb 2, 2026</p>
                                <p>Feb 17, 2026</p>
                                <p>Feb 14, 2026</p>
                                <p>Mar 17, 2026</p>
                                <p>Apr 3, 2026</p>
                                <p>Apr 5, 2026</p>
                                <p>Apr 6, 2026</p>
                                <p>May 10, 2026</p>
                                <p>May 18, 2026</p>
                                <p>Jun 21, 2026</p>
                                <p>Jul 1, 2026</p>
                                <p>Sep 1, 2026</p>
                                <p>Oct 13, 2026</p>
                                <p>Oct 31, 2026</p>
                                <p>Nov 11, 2026</p>
                                <p>Dec 25, 2026</p>
                                <p>Dec 26, 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row Home_Main'>
                    <div className='col-md-12 p-2 text-start bg-traslate border'>
                        <h1>Holidays in Bharat, USA, Australia and Canada</h1>
                        <div className='Row_Bottom bg-traslate border mb-4'></div>
                        <p>List of holidays, memorable dates, religious holidays, and other popular holidays. The date of the holiday and the time remaining before the start of the holiday are displayed.</p>
                        <p>Some holidays are celebrated on a grand scale, while others are very modest, almost imperceptible.
                            In this list you can find out what holiday is today and see what holidays will be soon.
                            You can open the page of any of the holidays to see the countdown timer to the holiday,
                            see the description of the holiday and the day of its celebration in any year.</p>
                        <p>The word holiday has differing connotations in different regions. In the United States the word is used exclusively to refer to the nationally,
                            religiously or culturally observed day(s) of rest or celebration, or the events themselves, whereas in the United Kingdom and other Commonwealth nations,
                            the word may refer to the period of time where leave from one's duties has been agreed, and is used as a synonym to the US preferred vacation.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Holidays