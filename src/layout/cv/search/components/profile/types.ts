import { AvatarProps } from "@/components/common/avatar/types";
import { Address, GetProfile } from "@/services/api/curriculum/types";

export interface ProfileProps extends AvatarProps, GetProfile {
}