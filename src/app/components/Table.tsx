'use client'
import carPic from '../../../public/mini_coper.jpg';
import Image from 'next/image';
import actionsBtn from '../../../public/dots-vertical.svg';

const Table = () => {
  return (
      <table>
        <thead>
          <tr>
            <th>
              CAR
            </th>
            <th>
              NEXT RESERVATION
            </th>
            <th>
              STATUS
            </th>
            <th>
              RATING
            </th>
            <th>
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          {
            (() => {
              const lines = [];
              for (let i = 0; i < 6; i += 1) {
                lines.push(
                  <tr key={ i }>
                    <td>
                      <Image
                        src={ carPic }
                        alt="Picture of the Mini Cooper 2020"
                        width={ 50 }
                      />
                      Mini Cooper 2020
                    </td>
                    <td>
                      Jul 6 - Jul 12
                    </td>
                    <td>
                      <button>Available</button>
                    </td>
                    <td >
                    </td>
                    <td>
                      <div>
                        <Image
                          src={ actionsBtn }
                          alt="Actions button"
                        />
                      </div>
                    </td>
                  </tr>
                );
              }
              return lines;
            })()
          }
        </tbody>
      </table>
  );
}

export default Table;
