import { FC } from 'react'
import { useAppSelector } from '../../hook'

const WishList: FC = () => {
    const wishListItem = useAppSelector((state: any) => state.wishList.value);

    console.log(wishListItem)
  return (
    <div>WishList</div>
  )
}

export default WishList