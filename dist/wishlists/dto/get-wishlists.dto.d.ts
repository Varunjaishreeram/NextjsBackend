import { SortOrder } from 'src/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';
import { Paginator } from 'src/common/dto/paginator.dto';
import { Wishlist } from '../entities/wishlist.entity';
export declare class WishlistPaginator extends Paginator<Wishlist> {
    data: Wishlist[];
}
export declare class GetWishlistDto extends PaginationArgs {
    orderBy?: QueryReviewsOrderByColumn;
    sortedBy?: SortOrder;
    search?: string;
}
export declare enum QueryReviewsOrderByColumn {
    NAME = "NAME",
    CREATED_AT = "CREATED_AT",
    UPDATED_AT = "UPDATED_AT"
}
