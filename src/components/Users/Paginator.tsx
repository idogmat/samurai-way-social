import React, {useState} from 'react';
import s from './Users.module.scss';


type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(Math.ceil((portionCount+currentPage - portionCount)/portionSize));
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    console.log(portionNumber,'page')
    return (
        <div >
            {portionNumber > 1 &&
                <span className={s.button} onClick={() => {
                    setPortionNumber(e=>e - 1)
                }}>PREV</span>}

            <div className={s.paginatorNumbers}>
                {pages
                    .filter(p => (p >= leftPortionPageNumber && p <= rightPortionPageNumber))
                    .map(p => {
                        return <span className={currentPage === p ? s.currentPage : ''}
                            key={p}
                            onClick={() => {
                                onPageChanged(p)
                            }}>{p}</span>
                    })}
            </div>
            {portionCount > portionNumber &&
                <span className={s.button}
                                    onClick={() => setPortionNumber(e=>e + 1)}>NEXT</span>}
        </div>
    );
};

export default Paginator