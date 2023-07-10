import React from 'react';
export default function Button() {
    
  return (
    <div>
            <select
            style={{borderRadius:"5px", padding:"3px"}}
            >
              {[
                "General Report",
                "Year Report",
                "Month Report",
                "Daily Report",
                "General Report",
                "Period of Time",
              ].map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
  )
}
