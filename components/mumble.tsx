import {
  Card,
  CardSize,
  IconLink,
  IconLinkType,
  Profile,
  Time,
} from '@smartive-education/design-system-component-library-musketeers';

function Mumble(props: {
  avatar: JSX.Element;
  displayName: string;
  userName: string;
  timestamp: string;
  onClickUserName: () => void;
  onClickTimestamp: () => void;
  footer: JSX.Element;
  children: JSX.Element;
}) {
  return (
    <Card size={CardSize.XL} hasRoundBorders={true}>
      <div className="relative">
        <div className="absolute -top-s -left-[80px]">{props.avatar}</div>

        <div className="label-l text-slate-900 mb-xxs">{props.displayName}</div>

        <div className="flex gap-s">
          <IconLink type={IconLinkType.VIOLET} label={props.userName} href="" target="" onClick={props.onClickUserName}>
            <Profile />
          </IconLink>
          <IconLink type={IconLinkType.DEFAULT} label={props.timestamp} href="" target="" onClick={props.onClickTimestamp}>
            <Time />
          </IconLink>
        </div>

        <div className="paragraph-m text-slate-900 grid pt-m gap-m">{props.children}</div>

        <div className="py-m flex gap-s">{props.footer}</div>
      </div>
    </Card>
  );
}

export default Mumble;
