import {
  Card,
  CardSize,
  Textarea,
  Button,
  ButtonType,
  ButtonSize,
  Upload,
  Send,
} from '@smartive-education/design-system-component-library-musketeers';

function MumbleAdd(props: { avatar: JSX.Element; title: string }) {
  return (
    <Card size={CardSize.XL} hasRoundBorders={true}>
      <div className="relative">
        <div className="absolute -top-s -left-[80px]">{props.avatar}</div>

        <div className="label-xl text-slate-900 mb-s">{props.title}</div>

        <Textarea onChange={(event) => event} placeholder="Deine Meinung zählt!" rows={8} value="" />

        <div className="flex gap-xs mt-xs">
          <Button
            label="Bild hochladen"
            onClick={(event) => event}
            type={ButtonType.DEFAULT}
            size={ButtonSize.M}
            isFullWidth={true}
            showBorder={false}
          >
            <Upload />
          </Button>
          <Button
            label="Absenden"
            onClick={(event) => event}
            type={ButtonType.VIOLET}
            size={ButtonSize.M}
            isFullWidth={true}
            showBorder={false}
          >
            <Send />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default MumbleAdd;
