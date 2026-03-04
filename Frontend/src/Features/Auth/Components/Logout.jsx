import React, { useState } from 'react'
import '../Styles/Logout.scss'
import { LogOut } from 'lucide-react'
import useAuth from '../Hooks/useAuth'
import { useNavigate } from 'react-router'

const Logout = () => {
    const [logoutModal, setLogoutModal] = useState(false)
    const { logout } = useAuth()
    const navigate = useNavigate()
    const handleLogout = async () => {
        const response = await logout()
        if (response?.success) {
            setLogoutModal(false)
            navigate("/login")
        } else {
            setLogoutModal(false)
        }
    }

    return (
        <div className="logout-container">
            <button className='logout' onClick={() => setLogoutModal(!logoutModal)}><LogOut size={20} /> Logout</button>
            {logoutModal && <div className="logout-modal">
                <div className="logout-modal-content">
                    <div className="logout-modal-body">
                        <p>Are you sure you want to logout?</p>
                    </div>
                    <div className="logout-modal-footer">
                        <button className='cancel-btn' onClick={() => setLogoutModal(false)}>Cancel</button>
                        <button className='logout-btn' onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Logout