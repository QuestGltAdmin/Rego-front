import * as Tabs from '@radix-ui/react-tabs';
import BlogAndNewsModal from 'components/modals/BlogAndNewsModal';
import BuyAndSellModal from 'components/modals/BuyAndSellModal';
import BuySellWarningModal from 'components/modals/BuySellWarningModal';
import CreateSipModal from 'components/modals/CreateSipModal';
import SearchModal from 'components/modals/SearchModal';
import RegoLoader, { RegoLoaderFullScreen } from 'components/RegoLoader';
import DialogDemo from 'components/styled/Dialog';
export const Test = () => (

  <>
  <Tabs.Root defaultValue="tab1" orientation="vertical">

    <Tabs.List aria-label="tabs example">

      <Tabs.Trigger value="tab1">One</Tabs.Trigger>

      <Tabs.Trigger value="tab2">Two</Tabs.Trigger>

      <Tabs.Trigger value="tab3">Three</Tabs.Trigger>

    </Tabs.List>

    <Tabs.Content value="tab1">Tab one content</Tabs.Content>

    <Tabs.Content value="tab2">Tab two content</Tabs.Content>

    <Tabs.Content value="tab3">Tab three content</Tabs.Content>

  </Tabs.Root>
  {/* Demo Dialog Component */}
  <DialogDemo/>
  {/* Create Sip Modal */}
  <CreateSipModal/>
  {/* Buy/Sell Warning Modal */}
  <BuySellWarningModal/>
  {/* Blog and News Modal */}
  <BlogAndNewsModal/>
  {/* Rego Search Modal */}
  <SearchModal/>
  {/* P2P Buy Modal  */}
  <BuyAndSellModal type={"BUY"} />
  {/* P2P Sell Modal */}
  <BuyAndSellModal type={"SELL"} />
  {/* <NFTDetailsModal onClose={()=>console.log("close nft modal")}/> */}
  {/* Rego Rego custom size  */}
  <RegoLoader loaderAutoResize={false}/> 
  {/* Rego Loader Full Screen */}
  <RegoLoaderFullScreen/>
  
  
  </>

);