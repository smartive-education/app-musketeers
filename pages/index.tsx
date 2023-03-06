import Head from 'next/head';
import {
  Container,
  Avatar,
  AvatarSize,
  Interaction,
  InteractionType,
  Share,
  Hashtag,
} from '@smartive-education/design-system-component-library-musketeers';
import Mumble from '../components/mumble';
import MumbleAdd from '../components/mumble-add';

export default function PageHome() {
  return (
    <>
      <Head>
        <title>Willkommen auf Mumble</title>
      </Head>

      <Container>
        <h1 className="heading-2 text-violet-600 mb-xs">Willkommen auf Mumble</h1>
        <h2 className="heading-4 text-slate-500 mb-m">
          Voluptatem qui cumque voluptatem quia tempora dolores distinctio vel repellat dicta.
        </h2>
        <div className="mb-s">
          <MumbleAdd
            title={'Hey, was gibt’s neues?'}
            avatar={
              <Avatar
                alt="Display Name @displayName"
                showBorder
                size={AvatarSize.M}
                src="https://randompicturegenerator.com/img/people-generator/gd121f56d8674f28d00ce9f1c44686e7a9bee58b8d33a3c57daaada1fa493c214290f9490833d1ff18f4ee16cd5298e1f_640.jpg"
              />
            }
          />
        </div>
        <div>
          <Mumble
            avatar={
              <Avatar
                alt="Display Name @displayName"
                showBorder
                size={AvatarSize.M}
                src="https://randompicturegenerator.com/img/people-generator/gd121f56d8674f28d00ce9f1c44686e7a9bee58b8d33a3c57daaada1fa493c214290f9490833d1ff18f4ee16cd5298e1f_640.jpg"
              />
            }
            displayName="Hans Muster"
            footer={
              <>
                {/* <CommentInteractionComponent />
                <LikeInteractionComponent /> */}
                <Interaction onClick={(event) => event} type={InteractionType.DEFAULT}>
                  <Share />
                  Copy link
                </Interaction>
              </>
            }
            onClickTimestamp={() => {}}
            onClickUserName={() => {}}
            timestamp="timestamp"
            userName="hansmuster"
          >
            <>
              <div>
                Sed at eleifend erat. Ut mattis malesuada tristique. Aliquam eget ultricies ipsum. Quisque rutrum orci non
                risus dignissim, a semper tortor ultricies. Nam commodo lacus mi, molestie malesuada mi scelerisque eu.
                Aenean et pellentesque lectus, in iaculis sem. In ac efficitur lectus. Quisque consectetur est libero, eu
                sagittis magna vestibulum a. Etiam consectetur lobortis ipsum et bibendum. Maecenas id purus quam.
              </div>
              <div className="flex gap-xs">
                <Hashtag label="myhashtag" onClick={(event) => event} />
                <Hashtag label="myhashtag2" onClick={(event) => event} />
              </div>
              <img
                alt=""
                className="block rounded-default"
                src="https://randompicturegenerator.com/img/people-generator/gd121f56d8674f28d00ce9f1c44686e7a9bee58b8d33a3c57daaada1fa493c214290f9490833d1ff18f4ee16cd5298e1f_640.jpg"
              />
            </>
          </Mumble>
        </div>
      </Container>
    </>
  );
}
