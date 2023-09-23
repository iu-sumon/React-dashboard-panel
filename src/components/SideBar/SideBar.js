import React from 'react';
import './SideBar.css'
const SideBar = () => {
    return ( 
        <div class="navigation">
            <ul className='p-0 pt-5'> 
                <li>
                    <a  href="/">
                        <span class="icon">
                         <i class="fas fa-home"></i>
                        </span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>

                <li>
                    <a  href="/">
                        <span class="icon">
                          <i class="fa-solid fa-user-gear"></i>
                        </span>
                        <span class="title">System accounts</span>
                    </a>
                </li>

                <li>
                    <a  href="/">
                        <span class="icon">
                        <i class="fa-solid fa-building-columns"></i>
                        </span>
                        <span class="title">RMS</span>
                    </a>
                </li>

                <li>
                    <a  href="/">
                        <span class="icon">
                        <i class="fa-solid fa-dollar-sign"></i>
                        </span>
                        <span class="title">Limits</span>
                    </a>
                </li>

                <li>
                    <a  href="/">
                        <span class="icon">
                        <i class="fa-solid fa-folder"></i>
                        </span>
                        <span class="title">File Manager</span>
                    </a>
                </li>

                <li>
                    <a  href="/">
                        <span class="icon">
                        <i class="fa-regular fa-newspaper"></i>
                        </span>
                        <span class="title">BO Accounts</span>
                    </a>
                </li>

                <li>
                    <a  href="/">
                        <span class="icon">
                        <i class="fa-solid fa-right-left"></i>
                        </span>
                        <span class="title">Trade</span>
                    </a>
                </li>
                <li>
                    <a  href="/">
                        <span class="icon">
                        <i class="fa-solid fa-book"></i>
                        </span>
                        <span class="title">Reports</span>
                    </a>
                </li>
                <li>
                    <a  href="/">
                        <span class="icon">
                        <i class="fa-solid fa-user"></i>
                        </span>
                        <span class="title">Account</span>
                    </a>
                </li>
                <li>
                    <a  href="/">
                        <span class="icon">
                        <i class="fa-solid fa-gear"></i>
                        </span>
                        <span class="title">Settings</span>
                    </a>
                </li>
                <li>
                    <a  href="/">
                        <span class="icon">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        </span>
                        <span class="title">Logout</span>
                    </a>
                </li>
            </ul>
        </div> 
    );
};

export default SideBar;