import React from 'react';
import { VscSourceControl, VscError, VscWarning, VscCheck, VscBell } from 'react-icons/vsc';
import { IoIosGitBranch } from 'react-icons/io';

const StatusBar = () => {
    return (
        <div style={{
            height: 22,
            background: '#007acc', // VS Code Blue
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 11,
            fontFamily: 'Segoe UI, sans-serif',
            padding: '0 8px',
            userSelect: 'none',
            zIndex: 1000
        }}>
            {/* Left Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
                    <IoIosGitBranch size={14} />
                    <span>master*</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
                    <VscSourceControl />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <VscError /> 0
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <VscWarning /> 0
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{ cursor: 'pointer' }}>Ln 24, Col 8</div>
                <div style={{ cursor: 'pointer' }}>Spaces: 2</div>
                <div style={{ cursor: 'pointer' }}>UTF-8</div>
                <div style={{ cursor: 'pointer' }}>JavaScript React</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
                    <VscCheck /> Prettier
                </div>
                <div style={{ cursor: 'pointer' }}>
                    <VscBell />
                </div>
            </div>
        </div>
    );
};

export default StatusBar;
